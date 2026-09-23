import React, { useState } from 'react';
import { Send, FileCheck, Heart, Building2 } from 'lucide-react';

export function ContactForm({ onNotify }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onNotify('Required Fields Missing', 'Please fill in your name, email, and message.', 'error');
      return;
    }
    onNotify(
      'Message Dispatched Successfully!',
      `Thank you, ${formData.name}. The GMVS Secretariat at Bubani, Ajmer will respond within 24–48 hours.`,
      'success'
    );
    setFormData({ name: '', email: '', phone: '', category: 'General Inquiry', message: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="c-name">Full Name <span className="req">*</span></label>
          <input
            id="c-name"
            type="text"
            className="form-control"
            placeholder="e.g. Dr. Sunita Verma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="c-email">Email Address <span className="req">*</span></label>
          <input
            id="c-email"
            type="email"
            className="form-control"
            placeholder="sunita@example.org"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="c-phone">Phone / WhatsApp</label>
          <input
            id="c-phone"
            type="tel"
            className="form-control"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="c-cat">Subject / Department <span className="req">*</span></label>
          <select
            id="c-cat"
            className="form-control"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="CSR & Corporate Partnership">CSR &amp; Corporate Partnership</option>
            <option value="Institutional Grant / Philanthropy">Institutional Grant / Philanthropy</option>
            <option value="80-G Tax Receipt Request">80-G Tax Receipt Request</option>
            <option value="Audited Financials / FCRA">Audited Financials / FCRA Info</option>
            <option value="Media & Research">Media &amp; Research Collaboration</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="c-msg">Your Message / Inquiry <span className="req">*</span></label>
        <textarea
          id="c-msg"
          rows={5}
          className="form-control"
          placeholder="Describe your inquiry, proposed partnership, or questions..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
        <Send size={18} />
        <span>Send Message to Secretariat</span>
      </button>
    </form>
  );
}

export function VolunteerForm({ onNotify }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Education & Child Remedial Teaching',
    duration: 'On-Site in Ajmer (2 - 4 Weeks)',
    city: '',
    note: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNotify(
      'Volunteer Application Received!',
      `Thank you, ${formData.name}. Our community coordinator will connect with you soon.`,
      'success'
    );
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: 'Education & Child Remedial Teaching',
      duration: 'On-Site in Ajmer (2 - 4 Weeks)',
      city: '',
      note: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Your Full Name <span className="req">*</span></label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email Address <span className="req">*</span></label>
          <input
            type="email"
            className="form-control"
            placeholder="rahul@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Phone / WhatsApp <span className="req">*</span></label>
          <input
            type="tel"
            className="form-control"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Primary Area of Interest <span className="req">*</span></label>
          <select
            className="form-control"
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
          >
            <option value="Education & Child Remedial Teaching">Education &amp; Child Remedial Teaching</option>
            <option value="Women Empowerment & Tailoring Clusters">Women Empowerment &amp; Tailoring Clusters</option>
            <option value="Water Harvesting & Jal Shakti Fieldwork">Water Harvesting &amp; Jal Shakti Fieldwork</option>
            <option value="Medical Camps & Rural Eye Care Support">Medical Camps &amp; Rural Eye Care Support</option>
            <option value="Digital Storytelling, Video & Photography">Digital Storytelling, Video &amp; Photography</option>
            <option value="Research & CSR Reporting">Research &amp; CSR Reporting</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Preferred Duration</label>
          <select
            className="form-control"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          >
            <option value="On-Site in Ajmer (2 - 4 Weeks)">On-Site in Ajmer (2 – 4 Weeks)</option>
            <option value="On-Site in Ajmer (1 - 3 Months)">On-Site in Ajmer (1 – 3 Months)</option>
            <option value="Weekend Community Volunteer">Weekend Community Volunteer</option>
            <option value="Remote / Digital Volunteer">Remote / Digital Volunteer</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Current City / Institution</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Jaipur / Delhi / Mumbai"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Motivation &amp; Skills</label>
        <textarea
          rows={3}
          className="form-control"
          placeholder="Briefly describe your background, skills, and why you want to support GMVS..."
          value={formData.note}
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
      </div>

      <button type="submit" className="btn btn-secondary btn-lg" style={{ width: '100%' }}>
        <Heart size={18} fill="currentColor" />
        <span>Submit Volunteer Application</span>
      </button>
    </form>
  );
}

export function ReceiptClaimForm({ onNotify }) {
  const [formData, setFormData] = useState({
    name: '',
    pan: '',
    email: '',
    phone: '',
    amount: '',
    utr: '',
    program: 'General & Where Needed Most',
    address: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanPan = formData.pan.trim().toUpperCase();
    if (!cleanPan || cleanPan.length !== 10) {
      onNotify('Valid 10-Digit PAN Required', 'Please enter a valid 10-character PAN number for Form 10BE filing.', 'warning');
      return;
    }

    onNotify(
      '80-G Tax Certificate Request Logged',
      'Thank you! Your donation details have been verified. Official Form 10BE will be dispatched to your email.',
      'success'
    );
    setFormData({
      name: '',
      pan: '',
      email: '',
      phone: '',
      amount: '',
      utr: '',
      program: 'General & Where Needed Most',
      address: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Donor Full Name (as on PAN card) <span className="req">*</span></label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Ramesh Kumar Verma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">10-Digit PAN Number <span className="req">*</span></label>
          <input
            type="text"
            className="form-control"
            placeholder="ABCDE1234F"
            maxLength={10}
            style={{ textTransform: 'uppercase', fontFamily: 'monospace' }}
            value={formData.pan}
            onChange={(e) => setFormData({ ...formData, pan: e.target.value.toUpperCase() })}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Email Address (for Certificate) <span className="req">*</span></label>
          <input
            type="email"
            className="form-control"
            placeholder="ramesh@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone / WhatsApp <span className="req">*</span></label>
          <input
            type="tel"
            className="form-control"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Donation Amount (₹ INR) <span className="req">*</span></label>
          <input
            type="number"
            className="form-control"
            placeholder="10000"
            min={500}
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Bank UTR / Transaction Ref No. <span className="req">*</span></label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. CMS123456789 or IMPS ref"
            value={formData.utr}
            onChange={(e) => setFormData({ ...formData, utr: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Postal Address (for Form 10BE filing) <span className="req">*</span></label>
        <textarea
          rows={2}
          className="form-control"
          placeholder="Complete postal address with Pin Code..."
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
        <FileCheck size={18} />
        <span>Submit 80-G Receipt Claim</span>
      </button>
    </form>
  );
}

export function CSRProposalForm({ onNotify }) {
  const [formData, setFormData] = useState({
    company: '',
    contactName: '',
    email: '',
    phone: '',
    thematicArea: 'Women Collectives & Livelihood Clusters',
    budget: '',
    summary: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNotify(
      'CSR Partnership Proposal Submitted',
      `Thank you, ${formData.company}. Our Executive Director will contact your CSR team within 24 hours.`,
      'success'
    );
    setFormData({
      company: '',
      contactName: '',
      email: '',
      phone: '',
      thematicArea: 'Women Collectives & Livelihood Clusters',
      budget: '',
      summary: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Company / Foundation Name <span className="req">*</span></label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Tata Consultancy / Reliance Foundation"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Contact Person &amp; Title <span className="req">*</span></label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Ananya Sen, Head of CSR"
            value={formData.contactName}
            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Corporate Email <span className="req">*</span></label>
          <input
            type="email"
            className="form-control"
            placeholder="csr@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Direct Contact Number <span className="req">*</span></label>
          <input
            type="tel"
            className="form-control"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">CSR Thematic Focus Area</label>
          <select
            className="form-control"
            value={formData.thematicArea}
            onChange={(e) => setFormData({ ...formData, thematicArea: e.target.value })}
          >
            <option value="Women Collectives & Livelihood Clusters">Women Collectives &amp; Livelihood Clusters</option>
            <option value="Jal Shakti & Rainwater Harvesting">Jal Shakti &amp; Rainwater Harvesting</option>
            <option value="Child Education & Remedial Learning">Child Education &amp; Remedial Learning</option>
            <option value="Rural Health & Mobile Eye Clinics">Rural Health &amp; Mobile Eye Clinics</option>
            <option value="Multi-Sectoral Village Adoption">Multi-Sectoral Village Adoption</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Estimated CSR Budget Bracket</label>
          <select
            className="form-control"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          >
            <option value="₹10 Lakh - ₹25 Lakh">₹10 Lakh – ₹25 Lakh</option>
            <option value="₹25 Lakh - ₹50 Lakh">₹25 Lakh – ₹50 Lakh</option>
            <option value="₹50 Lakh - ₹1 Crore">₹50 Lakh – ₹1 Crore</option>
            <option value="₹1 Crore+">₹1 Crore+</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Brief Outline of Proposed Initiative</label>
        <textarea
          rows={3}
          className="form-control"
          placeholder="Briefly state target geography, beneficiaries, and milestones..."
          value={formData.summary}
          onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
        />
      </div>

      <button type="submit" className="btn btn-secondary btn-lg" style={{ width: '100%' }}>
        <Building2 size={18} />
        <span>Submit CSR Partnership Proposal</span>
      </button>
    </form>
  );
}
