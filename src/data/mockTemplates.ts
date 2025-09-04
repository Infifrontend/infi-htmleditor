import { Template } from '../types';

export const mockTemplates: Template[] = [
  // Approval Templates (10)
  {
    id: 'ap-1',
    title: 'Application Approved',
    category: 'approval',
    content: `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1 style="color: #52c41a;">Your Application Has Been Approved!</h1>
        <p>Dear Applicant,</p>
        <p>We are pleased to inform you that your application has been <strong>approved</strong>.</p>
        <p>Next steps:</p>
        <ul>
          <li>Review the attached documents</li>
          <li>Complete the onboarding process</li>
          <li>Contact us if you have any questions</li>
        </ul>
        <p>Best regards,<br>The Approval Team</p>
      </div>
    `,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    id: 'ap-2',
    title: 'Loan Approval Notice',
    category: 'approval',
    content: `
      <div style="padding: 20px; background-color: #f6ffed; border-left: 4px solid #52c41a;">
        <h2 style="color: #389e0d;">Loan Application Approved</h2>
        <p>Congratulations! Your loan application for <strong>$50,000</strong> has been approved.</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background-color: #f0f0f0;">
            <th style="padding: 10px; border: 1px solid #ddd;">Loan Amount</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Interest Rate</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Term</th>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">$50,000</td>
            <td style="padding: 10px; border: 1px solid #ddd;">3.5%</td>
            <td style="padding: 10px; border: 1px solid #ddd;">5 years</td>
          </tr>
        </table>
      </div>
    `,
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-02'),
  },
  {
    id: 'ap-3',
    title: 'Job Offer Approval',
    category: 'approval',
    content: `
      <div style="padding: 25px; background: linear-gradient(135deg, #f6ffed 0%, #fff 100%);">
        <h1 style="color: #52c41a; margin-bottom: 20px;">Welcome to Our Team!</h1>
        <p>We are excited to offer you the position of <strong>Senior Developer</strong>.</p>
        <blockquote style="border-left: 3px solid #52c41a; padding-left: 15px; margin: 20px 0; font-style: italic;">
          "We believe your skills and experience will be a valuable addition to our team."
        </blockquote>
        <p>Please review the attached offer letter and respond by the deadline.</p>
      </div>
    `,
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03'),
  },
  {
    id: 'ap-4',
    title: 'Membership Approval',
    category: 'approval',
    content: `
      <div style="padding: 20px; border: 2px solid #52c41a; border-radius: 8px;">
        <h2 style="text-align: center; color: #389e0d;">Membership Approved</h2>
        <p>Your premium membership has been activated!</p>
        <div style="background-color: #f6ffed; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <h3>Benefits Include:</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li>Unlimited access to all features</li>
            <li>Priority customer support</li>
            <li>Monthly exclusive content</li>
          </ul>
        </div>
      </div>
    `,
    createdAt: new Date('2024-01-04'),
    updatedAt: new Date('2024-01-04'),
  },
  {
    id: 'ap-5',
    title: 'Account Verification Approved',
    category: 'approval',
    content: `
      <div style="padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <h1 style="color: #52c41a;">✅ Account Verified Successfully</h1>
        <p>Your account verification is now complete.</p>
        <p>You can now access all premium features and services.</p>
        <a href="#" style="display: inline-block; background-color: #52c41a; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px;">Access Dashboard</a>
      </div>
    `,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
  },
  {
    id: 'ap-6',
    title: 'Project Approval',
    category: 'approval',
    content: `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #52c41a; border-bottom: 2px solid #52c41a; padding-bottom: 10px;">Project Approved</h2>
        <p>Your project proposal has been reviewed and approved by our team.</p>
        <div style="background-color: #f6ffed; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Project Name:</strong> Web Development Initiative</p>
          <p><strong>Budget:</strong> $25,000</p>
          <p><strong>Timeline:</strong> 3 months</p>
        </div>
      </div>
    `,
    createdAt: new Date('2024-01-06'),
    updatedAt: new Date('2024-01-06'),
  },
  {
    id: 'ap-7',
    title: 'Permit Approved',
    category: 'approval',
    content: `
      <div style="padding: 20px; background-color: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <h1 style="color: #52c41a; text-align: center;">Permit Approved</h1>
        <hr style="border: none; border-top: 2px solid #52c41a; margin: 20px 0;">
        <p>Your construction permit application has been approved.</p>
        <p><strong>Permit Number:</strong> #CP-2024-001</p>
        <p><strong>Valid Until:</strong> December 31, 2024</p>
        <p style="color: #666; font-size: 14px; margin-top: 30px;">Please keep this approval for your records.</p>
      </div>
    `,
    createdAt: new Date('2024-01-07'),
    updatedAt: new Date('2024-01-07'),
  },
  {
    id: 'ap-8',
    title: 'Credit Approval',
    category: 'approval',
    content: `
      <div style="padding: 25px; background: #f6ffed; border-radius: 10px;">
        <h2 style="color: #389e0d; margin-bottom: 15px;">Credit Application Approved</h2>
        <p>Your credit limit increase has been approved.</p>
        <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p><strong>New Credit Limit:</strong> $15,000</p>
          <p><strong>Effective Date:</strong> Immediately</p>
        </div>
        <p><em>Thank you for being a valued customer!</em></p>
      </div>
    `,
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-08'),
  },
  {
    id: 'ap-9',
    title: 'Service Approval',
    category: 'approval',
    content: `
      <div style="padding: 20px;">
        <h1 style="color: #52c41a;">Service Request Approved</h1>
        <p>Your service request has been reviewed and approved.</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 10px; background-color: #f0f0f0; font-weight: bold;">Service Type</td>
            <td style="padding: 10px;">Technical Support</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #f0f0f0; font-weight: bold;">Priority Level</td>
            <td style="padding: 10px;">High</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #f0f0f0; font-weight: bold;">Expected Completion</td>
            <td style="padding: 10px;">2 business days</td>
          </tr>
        </table>
      </div>
    `,
    createdAt: new Date('2024-01-09'),
    updatedAt: new Date('2024-01-09'),
  },
  {
    id: 'ap-10',
    title: 'Budget Approval',
    category: 'approval',
    content: `
      <div style="padding: 20px; border: 1px solid #52c41a; border-radius: 8px;">
        <h2 style="color: #52c41a; text-align: center;">Budget Request Approved</h2>
        <p>The budget for Q2 initiatives has been approved.</p>
        <div style="display: flex; justify-content: space-between; margin: 20px 0;">
          <div style="text-align: center; background-color: #f6ffed; padding: 15px; border-radius: 5px; flex: 1; margin: 0 5px;">
            <h3 style="margin: 0; color: #389e0d;">$125,000</h3>
            <p style="margin: 5px 0 0 0; color: #666;">Approved Amount</p>
          </div>
        </div>
      </div>
    `,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
  },

  // Rejected Templates (14)
  {
    id: 'rj-1',
    title: 'Application Rejected',
    category: 'rejected',
    content: `
      <div style="padding: 20px; background-color: #fff2f0; border-left: 4px solid #ff4d4f;">
        <h1 style="color: #cf1322;">Application Status Update</h1>
        <p>Dear Applicant,</p>
        <p>After careful review, we regret to inform you that your application has been <strong>rejected</strong>.</p>
        <div style="background-color: #fff; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <h3>Reasons for rejection:</h3>
          <ul>
            <li>Incomplete documentation</li>
            <li>Does not meet minimum requirements</li>
            <li>Missing required signatures</li>
          </ul>
        </div>
        <p>You may reapply after addressing these issues.</p>
      </div>
    `,
    createdAt: new Date('2024-01-11'),
    updatedAt: new Date('2024-01-11'),
  },
  {
    id: 'rj-2',
    title: 'Loan Rejection Notice',
    category: 'rejected',
    content: `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h2 style="color: #ff4d4f;">Loan Application Decision</h2>
        <p>Unfortunately, we are unable to approve your loan application at this time.</p>
        <blockquote style="border-left: 3px solid #ff4d4f; padding-left: 15px; margin: 20px 0; color: #666;">
          This decision is based on our current lending criteria and does not reflect on your personal character.
        </blockquote>
        <p>Please feel free to reapply in 6 months.</p>
      </div>
    `,
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12'),
  },
  {
    id: 'rj-3',
    title: 'Job Application Declined',
    category: 'rejected',
    content: `
      <div style="padding: 25px; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #ff4d4f;">Thank You for Your Interest</h1>
        <p>We appreciate the time you took to apply for the position.</p>
        <p>After careful consideration, we have decided to move forward with other candidates.</p>
        <div style="background-color: #fff2f0; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>We encourage you to:</strong></p>
          <ul>
            <li>Apply for future openings that match your skills</li>
            <li>Keep your profile updated in our system</li>
            <li>Consider our internship programs</li>
          </ul>
        </div>
      </div>
    `,
    createdAt: new Date('2024-01-13'),
    updatedAt: new Date('2024-01-13'),
  },
  {
    id: 'rj-4',
    title: 'Credit Application Denied',
    category: 'rejected',
    content: `
      <div style="padding: 20px; border: 1px solid #ff4d4f; border-radius: 8px;">
        <h2 style="color: #ff4d4f; text-align: center;">Credit Application Declined</h2>
        <p>We were unable to approve your credit application.</p>
        <p><strong>Primary reasons:</strong></p>
        <ol>
          <li>Insufficient credit history</li>
          <li>Debt-to-income ratio too high</li>
          <li>Recent credit inquiries</li>
        </ol>
        <p style="color: #666; font-size: 14px;">You will receive a detailed explanation by mail within 7-10 business days.</p>
      </div>
    `,
    createdAt: new Date('2024-01-14'),
    updatedAt: new Date('2024-01-14'),
  },
  {
    id: 'rj-5',
    title: 'Membership Rejection',
    category: 'rejected',
    content: `
      <div style="padding: 20px; background-color: #fff2f0;">
        <h1 style="color: #cf1322;">Membership Application Update</h1>
        <p>Thank you for your interest in joining our exclusive membership program.</p>
        <p>Currently, we are unable to accept your membership application.</p>
        <p style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #ff4d4f;">
          <strong>Note:</strong> Our membership program has limited spots and we receive many qualified applications.
        </p>
      </div>
    `,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: 'rj-6',
    title: 'Proposal Rejected',
    category: 'rejected',
    content: `
      <div style="padding: 25px; font-family: Georgia, serif;">
        <h2 style="color: #ff4d4f; border-bottom: 1px solid #ff4d4f; padding-bottom: 10px;">Proposal Decision</h2>
        <p>After thorough evaluation, your project proposal has been declined.</p>
        <table style="width: 100%; margin: 20px 0; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; background-color: #fff2f0; font-weight: bold; width: 30%;">Decision Date</td>
            <td style="padding: 10px;">January 15, 2024</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #fff2f0; font-weight: bold;">Review Committee</td>
            <td style="padding: 10px;">Technical Review Board</td>
          </tr>
        </table>
      </div>
    `,
    createdAt: new Date('2024-01-16'),
    updatedAt: new Date('2024-01-16'),
  },
  {
    id: 'rj-7',
    title: 'Insurance Claim Denied',
    category: 'rejected',
    content: `
      <div style="padding: 20px; background-color: #fff2f0; border-radius: 10px;">
        <h1 style="color: #ff4d4f;">Insurance Claim Decision</h1>
        <p>Your insurance claim #IC-2024-567 has been reviewed.</p>
        <p><strong>Status:</strong> <span style="color: #ff4d4f;">DENIED</span></p>
        <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <h3 style="margin-top: 0;">Reason for Denial:</h3>
          <p>The incident is not covered under your current policy terms.</p>
        </div>
        <p>If you believe this decision is incorrect, you may appeal within 30 days.</p>
      </div>
    `,
    createdAt: new Date('2024-01-17'),
    updatedAt: new Date('2024-01-17'),
  },
  {
    id: 'rj-8',
    title: 'Refund Request Denied',
    category: 'rejected',
    content: `
      <div style="padding: 20px;">
        <h2 style="color: #ff4d4f;">Refund Request Status</h2>
        <p>We have reviewed your refund request submitted on January 10, 2024.</p>
        <p>Unfortunately, your request does not qualify for a refund based on our policy.</p>
        <div style="border: 1px solid #ff4d4f; padding: 15px; border-radius: 5px; background-color: #fff2f0;">
          <h4 style="margin-top: 0;">Policy Reference:</h4>
          <p>Purchases beyond the 30-day return window are not eligible for refunds unless there is a manufacturing defect.</p>
        </div>
      </div>
    `,
    createdAt: new Date('2024-01-18'),
    updatedAt: new Date('2024-01-18'),
  },
  {
    id: 'rj-9',
    title: 'Scholarship Rejection',
    category: 'rejected',
    content: `
      <div style="padding: 25px; background: linear-gradient(135deg, #fff2f0 0%, #fff 100%);">
        <h1 style="color: #ff4d4f;">Scholarship Application Result</h1>
        <p>Thank you for applying for our annual scholarship program.</p>
        <p>While your application showed merit, we received an overwhelming number of qualified candidates.</p>
        <p style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #ff4d4f;">
          We encourage you to apply again next year and to explore other scholarship opportunities.
        </p>
      </div>
    `,
    createdAt: new Date('2024-01-19'),
    updatedAt: new Date('2024-01-19'),
  },
  {
    id: 'rj-10',
    title: 'Vendor Application Declined',
    category: 'rejected',
    content: `
      <div style="padding: 20px; border: 2px solid #ff4d4f; border-radius: 8px;">
        <h2 style="color: #ff4d4f; text-align: center;">Vendor Application Decision</h2>
        <p>We have completed the review of your vendor application.</p>
        <p>Currently, we are unable to add new vendors in your service category.</p>
        <ul style="background-color: #fff2f0; padding: 15px; border-radius: 5px;">
          <li>Our vendor network is at capacity</li>
          <li>Similar services are already well-represented</li>
          <li>Budget constraints for new partnerships</li>
        </ul>
      </div>
    `,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20'),
  },
  {
    id: 'rj-11',
    title: 'Patent Application Rejected',
    category: 'rejected',
    content: `
      <div style="padding: 20px; font-family: 'Times New Roman', serif;">
        <h1 style="color: #ff4d4f;">Patent Application Decision</h1>
        <p><strong>Application Number:</strong> PAT-2024-001</p>
        <p>Your patent application has been rejected based on the following criteria:</p>
        <div style="background-color: #fff2f0; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <ol>
            <li>Prior art exists for similar inventions</li>
            <li>Invention lacks novelty</li>
            <li>Insufficient technical specification</li>
          </ol>
        </div>
        <p>You may file an appeal or submit a revised application.</p>
      </div>
    `,
    createdAt: new Date('2024-01-21'),
    updatedAt: new Date('2024-01-21'),
  },
  {
    id: 'rj-12',
    title: 'Grant Proposal Declined',
    category: 'rejected',
    content: `
      <div style="padding: 25px; max-width: 700px; margin: 0 auto;">
        <h1 style="color: #ff4d4f;">Grant Proposal Review Results</h1>
        <p>Your grant proposal for research funding has been carefully reviewed by our committee.</p>
        <p>Unfortunately, we cannot fund your proposal at this time.</p>
        <div style="background-color: #fff2f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Committee Feedback:</h3>
          <ul>
            <li>Strong research methodology</li>
            <li>Limited budget availability this cycle</li>
            <li>Consider partnerships with other institutions</li>
          </ul>
        </div>
      </div>
    `,
    createdAt: new Date('2024-01-22'),
    updatedAt: new Date('2024-01-22'),
  },
  {
    id: 'rj-13',
    title: 'License Renewal Denied',
    category: 'rejected',
    content: `
      <div style="padding: 20px; background-color: #fff2f0; border-radius: 10px;">
        <h2 style="color: #cf1322;">License Renewal Decision</h2>
        <p><strong>License ID:</strong> LIC-2024-789</p>
        <p>Your license renewal application has been denied due to:</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background-color: #fff;">
            <td style="padding: 10px; border: 1px solid #ffccc7;">Outstanding violations</td>
            <td style="padding: 10px; border: 1px solid #ffccc7;">3 unresolved</td>
          </tr>
          <tr style="background-color: #fff;">
            <td style="padding: 10px; border: 1px solid #ffccc7;">Training requirements</td>
            <td style="padding: 10px; border: 1px solid #ffccc7;">Not completed</td>
          </tr>
        </table>
      </div>
    `,
    createdAt: new Date('2024-01-23'),
    updatedAt: new Date('2024-01-23'),
  },
  {
    id: 'rj-14',
    title: 'Promotional Request Rejected',
    category: 'rejected',
    content: `
      <div style="padding: 20px;">
        <h1 style="color: #ff4d4f;">Promotion Request Update</h1>
        <p>Your request for promotion to Senior Manager has been reviewed.</p>
        <p>At this time, we are unable to approve your promotion request.</p>
        <div style="background-color: #fff2f0; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3>Areas for Development:</h3>
          <ul>
            <li>Leadership experience in large projects</li>
            <li>Budget management certification</li>
            <li>Team management skills</li>
          </ul>
        </div>
        <p>We encourage you to work on these areas and reapply in the next review cycle.</p>
      </div>
    `,
    createdAt: new Date('2024-01-24'),
    updatedAt: new Date('2024-01-24'),
  },

  // Cancellation Templates (8)
  {
    id: 'cn-1',
    title: 'Service Cancellation',
    category: 'cancellation',
    content: `
      <div style="padding: 20px; background-color: #fffbe6; border-left: 4px solid #faad14;">
        <h1 style="color: #d48806;">Service Cancellation Notice</h1>
        <p>Your service has been successfully cancelled as requested.</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 10px; background-color: #fff; font-weight: bold;">Service Type</td>
            <td style="padding: 10px; background-color: #fff;">Premium Subscription</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #fafafa; font-weight: bold;">Cancellation Date</td>
            <td style="padding: 10px; background-color: #fafafa;">January 25, 2024</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #fff; font-weight: bold;">Final Billing Date</td>
            <td style="padding: 10px; background-color: #fff;">January 31, 2024</td>
          </tr>
        </table>
        <p>You will continue to have access until the end of your current billing period.</p>
      </div>
    `,
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-25'),
  },
  {
    id: 'cn-2',
    title: 'Appointment Cancellation',
    category: 'cancellation',
    content: `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h2 style="color: #faad14;">Appointment Cancelled</h2>
        <p>Your appointment scheduled for <strong>February 1, 2024 at 2:00 PM</strong> has been cancelled.</p>
        <div style="background-color: #fffbe6; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p><strong>Cancellation Details:</strong></p>
          <ul>
            <li>Cancelled by: Patient Request</li>
            <li>Cancellation Time: January 25, 2024</li>
            <li>Refund Status: Full refund processed</li>
          </ul>
        </div>
        <p>To reschedule, please contact our office or use our online booking system.</p>
      </div>
    `,
    createdAt: new Date('2024-01-26'),
    updatedAt: new Date('2024-01-26'),
  },
  {
    id: 'cn-3',
    title: 'Order Cancellation',
    category: 'cancellation',
    content: `
      <div style="padding: 20px; border: 1px solid #faad14; border-radius: 8px;">
        <h1 style="color: #d48806; text-align: center;">Order Cancellation Confirmed</h1>
        <p><strong>Order Number:</strong> #ORD-2024-1001</p>
        <p>Your order has been successfully cancelled.</p>
        <div style="background-color: #fffbe6; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3>Refund Information:</h3>
          <p>💳 Refund amount: <strong>$299.99</strong></p>
          <p>⏰ Expected processing time: 3-5 business days</p>
          <p>📧 Confirmation will be sent to your email</p>
        </div>
      </div>
    `,
    createdAt: new Date('2024-01-27'),
    updatedAt: new Date('2024-01-27'),
  },
  {
    id: 'cn-4',
    title: 'Event Cancellation',
    category: 'cancellation',
    content: `
      <div style="padding: 25px; background: linear-gradient(135deg, #fffbe6 0%, #fff 100%);">
        <h1 style="color: #faad14;">Event Cancellation Notice</h1>
        <p>We regret to inform you that the upcoming conference has been cancelled.</p>
        <blockquote style="border-left: 3px solid #faad14; padding-left: 15px; margin: 20px 0; color: #666;">
          Due to unforeseen circumstances, we must postpone the event to a later date.
        </blockquote>
        <div style="background-color: white; padding: 15px; border-radius: 5px;">
          <p><strong>Next Steps:</strong></p>
          <ul>
            <li>Full ticket refunds will be processed automatically</li>
            <li>We will notify you when the new date is confirmed</li>
            <li>Your registration will be automatically transferred</li>
          </ul>
        </div>
      </div>
    `,
    createdAt: new Date('2024-01-28'),
    updatedAt: new Date('2024-01-28'),
  },
  {
    id: 'cn-5',
    title: 'Subscription Cancellation',
    category: 'cancellation',
    content: `
      <div style="padding: 20px; background-color: #fffbe6; border-radius: 8px;">
        <h2 style="color: #d48806; text-align: center;">Subscription Cancelled</h2>
        <p>Your monthly subscription has been cancelled as requested.</p>
        <table style="width: 100%; margin: 20px 0; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px; background-color: #fff; border: 1px solid #d9d9d9; font-weight: bold;">Subscription Plan</td>
            <td style="padding: 12px; background-color: #fff; border: 1px solid #d9d9d9;">Premium Monthly</td>
          </tr>
          <tr>
            <td style="padding: 12px; background-color: #fafafa; border: 1px solid #d9d9d9; font-weight: bold;">Last Billing Date</td>
            <td style="padding: 12px; background-color: #fafafa; border: 1px solid #d9d9d9;">January 15, 2024</td>
          </tr>
          <tr>
            <td style="padding: 12px; background-color: #fff; border: 1px solid #d9d9d9; font-weight: bold;">Access Expires</td>
            <td style="padding: 12px; background-color: #fff; border: 1px solid #d9d9d9;">February 15, 2024</td>
          </tr>
        </table>
        <p>We're sad to see you go! You can reactivate anytime.</p>
      </div>
    `,
    createdAt: new Date('2024-01-29'),
    updatedAt: new Date('2024-01-29'),
  },
  {
    id: 'cn-6',
    title: 'Meeting Cancellation',
    category: 'cancellation',
    content: `
      <div style="padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <h1 style="color: #faad14;">Meeting Cancellation</h1>
        <p>The meeting scheduled for <strong>January 30, 2024</strong> has been cancelled.</p>
        <div style="background-color: #fffbe6; padding: 15px; border-radius: 5px; margin: 15px 0; border: 1px solid #faad14;">
          <h3 style="margin-top: 0; color: #d48806;">Meeting Details:</h3>
          <p><strong>Subject:</strong> Quarterly Review</p>
          <p><strong>Originally Scheduled:</strong> January 30, 2024 at 3:00 PM</p>
          <p><strong>Reason:</strong> Schedule conflict</p>
        </div>
        <p>A new meeting time will be proposed shortly.</p>
      </div>
    `,
    createdAt: new Date('2024-01-30'),
    updatedAt: new Date('2024-01-30'),
  },
  {
    id: 'cn-7',
    title: 'Contract Cancellation',
    category: 'cancellation',
    content: `
      <div style="padding: 25px; border: 2px solid #faad14; border-radius: 10px;">
        <h1 style="color: #d48806; text-align: center;">Contract Cancellation Notice</h1>
        <hr style="border: none; border-top: 1px solid #faad14; margin: 20px 0;">
        <p><strong>Contract ID:</strong> CNT-2024-555</p>
        <p>This serves as formal notice of contract cancellation.</p>
        <div style="background-color: #fffbe6; padding: 15px; border-radius: 5px;">
          <p><strong>Effective Date:</strong> February 1, 2024</p>
          <p><strong>Final Settlement:</strong> Will be processed within 10 business days</p>
        </div>
        <p>Thank you for your business partnership.</p>
      </div>
    `,
    createdAt: new Date('2024-01-31'),
    updatedAt: new Date('2024-01-31'),
  },
  {
    id: 'cn-8',
    title: 'Booking Cancellation',
    category: 'cancellation',
    content: `
      <div style="padding: 20px; background-color: #fffbe6;">
        <h2 style="color: #faad14;">Booking Cancellation Confirmation</h2>
        <p>Your booking has been successfully cancelled.</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background-color: white;">
          <tr>
            <th style="padding: 10px; background-color: #faad14; color: white; text-align: left;">Booking Details</th>
            <th style="padding: 10px; background-color: #faad14; color: white; text-align: left;">Information</th>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #d9d9d9;">Booking ID</td>
            <td style="padding: 10px; border: 1px solid #d9d9d9;">BK-2024-789</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #d9d9d9;">Cancellation Fee</td>
            <td style="padding: 10px; border: 1px solid #d9d9d9;">$0.00</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #d9d9d9;">Refund Amount</td>
            <td style="padding: 10px; border: 1px solid #d9d9d9;">$450.00</td>
          </tr>
        </table>
      </div>
    `,
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01'),
  },

  // Others Templates (6)
  {
    id: 'ot-1',
    title: 'Welcome Message',
    category: 'others',
    content: `
      <div style="padding: 30px; background: linear-gradient(135deg, #e6f7ff 0%, #fff 100%); border-radius: 15px;">
        <h1 style="color: #1890ff; text-align: center; margin-bottom: 20px;">Welcome to Our Platform!</h1>
        <p style="font-size: 18px; text-align: center; color: #666;">We're excited to have you join our community.</p>
        <div style="display: flex; justify-content: space-around; margin: 30px 0; flex-wrap: wrap;">
          <div style="text-align: center; background-color: white; padding: 20px; border-radius: 10px; margin: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); flex: 1; min-width: 200px;">
            <h3 style="color: #1890ff; margin-top: 0;">🚀 Get Started</h3>
            <p>Complete your profile setup</p>
          </div>
          <div style="text-align: center; background-color: white; padding: 20px; border-radius: 10px; margin: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); flex: 1; min-width: 200px;">
            <h3 style="color: #1890ff; margin-top: 0;">📚 Learn</h3>
            <p>Explore our tutorials and guides</p>
          </div>
          <div style="text-align: center; background-color: white; padding: 20px; border-radius: 10px; margin: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); flex: 1; min-width: 200px;">
            <h3 style="color: #1890ff; margin-top: 0;">💬 Connect</h3>
            <p>Join our community forums</p>
          </div>
        </div>
      </div>
    `,
    createdAt: new Date('2024-02-02'),
    updatedAt: new Date('2024-02-02'),
  },
  {
    id: 'ot-2',
    title: 'Newsletter Template',
    category: 'others',
    content: `
      <div style="max-width: 600px; margin: 0 auto; background-color: white; font-family: Arial, sans-serif;">
        <header style="background-color: #1890ff; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">Monthly Newsletter</h1>
          <p style="margin: 5px 0 0 0;">February 2024 Edition</p>
        </header>
        <div style="padding: 20px;">
          <h2 style="color: #1890ff;">This Month's Highlights</h2>
          <div style="border-bottom: 1px solid #e6f7ff; margin-bottom: 20px; padding-bottom: 15px;">
            <h3>Feature Update</h3>
            <p>We've launched our new dashboard with improved analytics and better user experience.</p>
          </div>
          <div style="border-bottom: 1px solid #e6f7ff; margin-bottom: 20px; padding-bottom: 15px;">
            <h3>Community Spotlight</h3>
            <p>Meet our featured user who built an amazing project using our platform.</p>
          </div>
        </div>
        <footer style="background-color: #f0f0f0; padding: 15px; text-align: center; color: #666;">
          <p>Thanks for being part of our community!</p>
        </footer>
      </div>
    `,
    createdAt: new Date('2024-02-03'),
    updatedAt: new Date('2024-02-03'),
  },
  {
    id: 'ot-3',
    title: 'Invoice Template',
    category: 'others',
    content: `
      <div style="padding: 30px; max-width: 800px; margin: 0 auto; background-color: white; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #1890ff; padding-bottom: 20px; margin-bottom: 30px;">
          <h1 style="color: #1890ff; margin: 0;">INVOICE</h1>
          <div style="text-align: right;">
            <p style="margin: 0; font-size: 16px;"><strong>Invoice #INV-2024-001</strong></p>
            <p style="margin: 0; color: #666;">Date: February 1, 2024</p>
          </div>
        </div>
        
        <div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
          <div>
            <h3 style="margin-top: 0; color: #1890ff;">Bill To:</h3>
            <p style="margin: 5px 0;">John Doe<br>123 Main Street<br>City, State 12345</p>
          </div>
          <div style="text-align: right;">
            <h3 style="margin-top: 0; color: #1890ff;">From:</h3>
            <p style="margin: 5px 0;">Your Company<br>456 Business Ave<br>Business City, ST 67890</p>
          </div>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
          <thead>
            <tr style="background-color: #e6f7ff;">
              <th style="padding: 12px; text-align: left; border: 1px solid #d9d9d9;">Description</th>
              <th style="padding: 12px; text-align: center; border: 1px solid #d9d9d9;">Qty</th>
              <th style="padding: 12px; text-align: right; border: 1px solid #d9d9d9;">Price</th>
              <th style="padding: 12px; text-align: right; border: 1px solid #d9d9d9;">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px; border: 1px solid #d9d9d9;">Web Development Services</td>
              <td style="padding: 12px; text-align: center; border: 1px solid #d9d9d9;">1</td>
              <td style="padding: 12px; text-align: right; border: 1px solid #d9d9d9;">$2,500.00</td>
              <td style="padding: 12px; text-align: right; border: 1px solid #d9d9d9;">$2,500.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr style="background-color: #f0f0f0;">
              <td colspan="3" style="padding: 12px; text-align: right; border: 1px solid #d9d9d9; font-weight: bold;">Total:</td>
              <td style="padding: 12px; text-align: right; border: 1px solid #d9d9d9; font-weight: bold; color: #1890ff;">$2,500.00</td>
            </tr>
          </tfoot>
        </table>

        <p style="color: #666; font-size: 14px;">Payment due within 30 days. Thank you for your business!</p>
      </div>
    `,
    createdAt: new Date('2024-02-04'),
    updatedAt: new Date('2024-02-04'),
  },
  {
    id: 'ot-4',
    title: 'Password Reset',
    category: 'others',
    content: `
      <div style="padding: 20px; background-color: #f0f2f5; border-radius: 8px; max-width: 500px; margin: 0 auto;">
        <h2 style="color: #1890ff; text-align: center;">Password Reset Request</h2>
        <p>Someone requested a password reset for your account.</p>
        <div style="text-align: center; margin: 25px 0;">
          <a href="#" style="display: inline-block; background-color: #1890ff; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold;">Reset Your Password</a>
        </div>
        <p style="color: #666; font-size: 14px;">If you didn't request this, please ignore this email. This link will expire in 24 hours.</p>
        <hr style="border: none; border-top: 1px solid #d9d9d9; margin: 20px 0;">
        <p style="color: #999; font-size: 12px; text-align: center;">This is an automated message, please do not reply.</p>
      </div>
    `,
    createdAt: new Date('2024-02-05'),
    updatedAt: new Date('2024-02-05'),
  },
  {
    id: 'ot-5',
    title: 'Thank You Message',
    category: 'others',
    content: `
      <div style="padding: 30px; background: linear-gradient(45deg, #e6f7ff, #f6ffed); border-radius: 15px; text-align: center;">
        <h1 style="color: #1890ff; font-size: 36px; margin-bottom: 20px;">Thank You! 🎉</h1>
        <p style="font-size: 20px; color: #333; margin-bottom: 25px;">Your support means the world to us.</p>
        <div style="background-color: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin: 20px 0;">
          <h3 style="color: #52c41a; margin-top: 0;">What's Next?</h3>
          <ul style="text-align: left; color: #666; line-height: 1.6;">
            <li>Check your email for confirmation details</li>
            <li>Explore our new features and updates</li>
            <li>Connect with us on social media</li>
          </ul>
        </div>
        <p style="color: #666; font-size: 16px;">We look forward to serving you better!</p>
      </div>
    `,
    createdAt: new Date('2024-02-06'),
    updatedAt: new Date('2024-02-06'),
  },
  {
    id: 'ot-6',
    title: 'Survey Invitation',
    category: 'others',
    content: `
      <div style="padding: 25px; max-width: 600px; margin: 0 auto; background-color: #fafafa; border-radius: 12px;">
        <h1 style="color: #1890ff; text-align: center;">We Value Your Feedback</h1>
        <p>Help us improve by taking our quick 5-minute survey.</p>
        <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e6f7ff;">
          <h3 style="color: #1890ff; margin-top: 0;">Survey Topics:</h3>
          <ul style="line-height: 1.8;">
            <li>Overall satisfaction with our service</li>
            <li>Feature requests and suggestions</li>
            <li>User experience feedback</li>
            <li>Areas for improvement</li>
          </ul>
        </div>
        <div style="text-align: center; margin: 25px 0;">
          <a href="#" style="display: inline-block; background-color: #1890ff; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">Take Survey</a>
        </div>
        <p style="color: #666; font-size: 14px; text-align: center;">This survey should take approximately 5 minutes to complete.</p>
      </div>
    `,
    createdAt: new Date('2024-02-07'),
    updatedAt: new Date('2024-02-07'),
  },
];

export const getTemplatesByCategory = (category: string) => {
  return mockTemplates.filter(template => template.category === category);
};

export const getAllCategories = () => {
  const categories = mockTemplates.reduce((acc, template) => {
    const category = template.category;
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category]++;
    return acc;
  }, {} as Record<string, number>);
  
  return Object.entries(categories).map(([name, count]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    key: name,
    count
  }));
};