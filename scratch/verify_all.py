import os
import re

ROOT_DIR = r"c:\Users\LENOVO\OneDrive\Desktop\GMVS Website"

SOCIAL_KEYS = [
    "youtube.com/@gmvs_official",
    "linkedin.com/company/gmvs-ajmer-ngo",
    "x.com/gmvs98ajmer",
    "instagram.com/gmvsajmer",
    "facebook.com/share/1HcgqzkPM3"
]

HTML_FILES = [
    "index.html",
    "about.html",
    "programs.html",
    "leadership.html",
    "stories.html",
    "partners.html",
    "awards.html",
    "contact.html",
    "donate.html",
    "index-static.html"
]

all_passed = True

print("=== VERIFYING STATIC HTML FILES ===")
for filename in HTML_FILES:
    filepath = os.path.join(ROOT_DIR, filename)
    if not os.path.exists(filepath):
        print(f"[FAIL] Missing file: {filename}")
        all_passed = False
        continue

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Check sections
    has_top_bar = 'class="top-bar-social' in content
    has_footer = 'class="footer-social-wrapper"' in content
    has_drawer = 'class="mobile-drawer-socials"' in content

    # Check social links
    missing_keys = [k for k in SOCIAL_KEYS if k not in content]

    # Check target and rel
    has_target_blank = 'target="_blank"' in content
    has_noopener = 'rel="noopener noreferrer"' in content

    status = "OK" if (has_top_bar and has_footer and has_drawer and not missing_keys and has_target_blank and has_noopener) else "FAIL"
    if status == "FAIL":
        all_passed = False
    print(f"[{status}] {filename}: TopBar={has_top_bar}, Footer={has_footer}, Drawer={has_drawer}, MissingLinks={missing_keys}")

    if filename == "contact.html":
        has_contact_card = 'class="contact-social-card"' in content
        print(f"       contact.html ContactSocialCard: {has_contact_card}")
        if not has_contact_card:
            all_passed = False

print("\n=== VERIFYING REACT COMPONENTS ===")
react_files = [
    os.path.join(ROOT_DIR, "src", "data", "socials.js"),
    os.path.join(ROOT_DIR, "src", "components", "SocialIcons.jsx"),
    os.path.join(ROOT_DIR, "src", "components", "TopBar.jsx"),
    os.path.join(ROOT_DIR, "src", "components", "Footer.jsx"),
    os.path.join(ROOT_DIR, "src", "components", "Navbar.jsx"),
    os.path.join(ROOT_DIR, "src", "pages", "ContactPage.jsx")
]

for rpath in react_files:
    rel_path = os.path.relpath(rpath, ROOT_DIR)
    if not os.path.exists(rpath):
        print(f"[FAIL] Missing React file: {rel_path}")
        all_passed = False
        continue
    with open(rpath, "r", encoding="utf-8") as f:
        rcontent = f.read()
    print(f"[OK] {rel_path} ({len(rcontent)} bytes)")

print("\n=== VERIFYING DIST BUNDLE ===")
dist_index = os.path.join(ROOT_DIR, "dist", "index.html")
if os.path.exists(dist_index):
    with open(dist_index, "r", encoding="utf-8") as f:
        dcontent = f.read()
    print(f"[OK] dist/index.html ({len(dcontent)} bytes)")
else:
    print("[FAIL] dist/index.html missing")
    all_passed = False

if all_passed:
    print("\nALL VERIFICATION CHECKS PASSED PERFECTLY!")
else:
    print("\nSOME CHECKS FAILED.")
