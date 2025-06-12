export function generateEmailTemplate({ name, email, subject, message, type }: {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: string;
}) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'job': return '💼';
      case 'collaboration': return '🤝';
      case 'tea': return '☕';
      default: return '💬';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'job': return 'Job Opportunity';
      case 'collaboration': return 'Collaboration';
      case 'tea': return 'Tea Chat';
      default: return 'General Inquiry';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'job': return 'linear-gradient(135deg, #10b981 0%, #34d399 100%)';
      case 'collaboration': return 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)';
      case 'tea': return 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)';
      default: return 'linear-gradient(135deg, #06b6d4 0%, #38bdf8 100%)';
    }
  };

  return `
        <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        body {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          line-height: 1.6;
          color: #e2e8f0;
          min-height: 100vh;
        }
        
        .email-wrapper {
          padding: 20px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .email-container {
          max-width: 680px;
          width: 100%;
          background: rgba(30, 41, 59, 0.8);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 
            0 20px 25px -5px rgba(0, 0, 0, 0.3),
            0 10px 10px -5px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(71, 85, 105, 0.3);
        }
        
        .header {
          background: linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%);
          padding: 40px 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .header::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
          animation: float 20s infinite linear;
        }
        
        @keyframes float {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        .header-content {
          position: relative;
          z-index: 2;
        }
        
        .header h1 {
          color: white;
          font-size: 28px;
          font-weight: 700;
          letter-spacing: -0.5px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          margin-bottom: 8px;
        }
        
        .header p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
          font-weight: 400;
        }
        
        .content {
          padding: 40px 30px;
        }
        
        .type-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: ${getTypeColor(type)};
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 30px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .contact-card {
          background: linear-gradient(135deg, 
            rgba(51, 65, 85, 0.8) 0%, 
            rgba(71, 85, 105, 0.6) 100%);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 30px;
          margin-bottom: 25px;
          border-left: 4px solid #06b6d4;
          border: 1px solid rgba(71, 85, 105, 0.4);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        .contact-card h2 {
          color: #f1f5f9;
          font-size: 20px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 25px;
        }
        
        .contact-details {
          display: grid;
          gap: 2.4rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        .contact-icon {
          width: 48px;
          height: 48px;
          padding:0.8rem 0.8rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 600;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .name-icon {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          color: white;
        }
        
        .email-icon {
          background: linear-gradient(135deg, #059669 0%, #10b981 100%);
          color: white;
          padding: 0.7rem 0.8rem 0.8rem 0.9rem;
        }
        
        .contact-info {
          flex: 1;
          min-width: 0;
        }
        
        .contact-label {
          color: #94a3b8;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        .contact-value {
          color: #f1f5f9;
          font-size: 16px;
          font-weight: 500;
          word-break: break-all;
        }
        
        .contact-value a {
          color: #38bdf8;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .contact-value a:hover {
          color: #0ea5e9;
          text-decoration: underline;
        }
        
        .message-section {
          background: linear-gradient(135deg, 
            rgba(30, 41, 59, 0.8) 0%, 
            rgba(51, 65, 85, 0.6) 100%);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 30px;
          margin-bottom: 25px;
          border: 1px solid rgba(71, 85, 105, 0.4);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        .section-title {
          color: #f1f5f9;
          font-size: 18px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        
        .message-content {
          color: #cbd5e1;
          font-size: 15px;
          line-height: 1.7;
          white-space: pre-wrap;
          word-wrap: break-word;
          background: rgba(15, 23, 42, 0.6);
          padding: 20px;
          border-radius: 12px;
          border: 1px solid rgba(51, 65, 85, 0.5);
          backdrop-filter: blur(5px);
        }
        
        .subject-content {
          color: #e2e8f0;
          font-size: 16px;
          line-height: 1.6;
          font-weight: 500;
          padding: 16px 20px;
          background: rgba(15, 23, 42, 0.4);
          border-radius: 12px;
          border: 1px solid rgba(51, 65, 85, 0.3);
        }
        
        .actions-card {
          background: linear-gradient(135deg, 
            rgba(30, 41, 59, 0.8) 0%, 
            rgba(51, 65, 85, 0.6) 100%);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 30px;
          text-align: center;
          border: 1px solid rgba(71, 85, 105, 0.4);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        .actions-title {
          color: #94a3b8;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 20px;
        }
        
        .reply-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
          color: white;
          padding: 14px 28px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(6, 182, 212, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .reply-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(6, 182, 212, 0.4);
          background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
        }
        
        .footer {
          background: rgba(15, 23, 42, 0.8);
          padding: 30px;
          text-align: center;
          border-top: 1px solid rgba(51, 65, 85, 0.3);
        }
        
        .footer-time {
          color: #64748b;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 8px;
        }
        
        .footer-source {
          color: #475569;
          font-size: 12px;
        }
        
        .footer-source a {
          color: #38bdf8;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .footer-source a:hover {
          color: #0ea5e9;
        }
        
        /* Mobile Responsive */
        @media only screen and (max-width: 640px) {
          .email-wrapper {
            padding: 15px;
          }
          
          .email-container {
            border-radius: 16px;
          }
          
          .header {
            padding: 30px 20px;
          }
          
          .header h1 {
            font-size: 24px;
          }
          
          .content {
            padding: 30px 20px;
          }
          
          .contact-card,
          .message-section,
          .actions-card {
            padding: 24px;
          }
          
          .contact-item {
            gap: 12px;
          }
          
          .contact-icon {
            width: 40px;
            height: 40px;
            font-size: 14px;
          }
          
          .type-badge {
            padding: 10px 18px;
            font-size: 13px;
          }
          
          .reply-button {
            padding: 12px 24px;
            font-size: 13px;
          }
          
          .contact-details {
            gap: 16px;
          }
        }

        @media only screen and (max-width: 480px) {
          .email-wrapper {
            padding: 10px;
          }
          
          .header {
            padding: 25px 15px;
          }
          
          .content {
            padding: 25px 15px;
          }
          
          .contact-card,
          .message-section,
          .actions-card {
            padding: 20px;
          }
          
          .contact-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          
          .contact-info {
            width: 100%;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="email-container">
          
          <!-- Header -->
          <div class="header">
            <div class="header-content">
              <h1>📧 New Message Received</h1>
              <p>From Rishab Chaudhary's Portfolio</p>
            </div>
          </div>

          <!-- Content -->
          <div class="content">
            
            <!-- Message Type Badge -->
            <div class="type-badge">
              <span>${getTypeIcon(type)}</span>
              <span>${getTypeLabel(type)}</span>
            </div>

            <!-- Contact Details -->
            <div class="contact-card">
              <h2>
                <span>👤</span>
                <span>Contact Information</span>
              </h2>
              
              <div class="contact-details">
                <div class="contact-item">
                  <div class="contact-icon name-icon">
                    ${name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                  </div>&nbsp;&nbsp;&nbsp;
                  <div class="contact-info">
                    <div class="contact-label">Full Name</div>
                    <div class="contact-value">${name}</div>
                  </div>
                </div>
                <br>
                <div class="contact-item">
                  <div class="contact-icon email-icon">
                    @
                  </div>&nbsp;&nbsp;&nbsp;
                  <div class="contact-info">
                    <div class="contact-label">Email Address</div>
                    <div class="contact-value">
                      <a href="mailto:${email}">${email}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            ${subject ? `
            <!-- Subject -->
            <div class="message-section">
              <h3 class="section-title">
                <span>📋</span>
                <span>Subject</span>
              </h3>
              <div class="subject-content">
                ${subject}
              </div>
            </div>
            ` : ''}

            <!-- Message -->
            <div class="message-section">
              <h3 class="section-title">
                <span>💬</span>
                <span>Message</span>
              </h3>
              <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
            </div>

            <!-- Quick Actions -->
            <div class="actions-card">
              <div class="actions-title">Quick Reply</div>
              <a href="mailto:${email}?subject=Re: ${subject || 'Your message from portfolio'}&body=Hi ${name},%0D%0A%0D%0AThank you for reaching out through my portfolio website.%0D%0A%0D%0A" 
                 class="reply-button">
                <span>✉️</span>
                <span>Reply to ${name}</span>
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div class="footer">
            <div class="footer-time">
              Received on ${new Date().toLocaleDateString('en-US', { 
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </div>
            <div class="footer-source">
              Sent from <a href="https://rishabchaudhary.dev">Rishab Chaudhary's Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}