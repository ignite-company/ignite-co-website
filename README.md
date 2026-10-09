# Ignite Co. Website

Responsive standalone marketing website for **www.igniteco.org**, deployed on Vercel from this GitHub repository.

## Contact form and email delivery

The footer and CTA popup contain **one shared form**, with name, company, email, phone and industry.

**Delivery service:** [FormSubmit.co](https://formsubmit.co/) (free, no GoHighLevel workflow or Supabase required).

- The browser submits to `https://formsubmit.co/ajax/asher.igniteco@gmail.com`.
- The form has an HTML `action` fallback to FormSubmit in case JavaScript fails.
- On the email provider's accepted response, visitors are redirected to `/thank-you.html`.
- A failed response remains on the form, shows an error, and does **not** redirect to the success page.
- The provider sends the submission fields in a notification email to `asher.igniteco@gmail.com`. The address is the recipient, not the customer.
- A hidden honeypot field helps filter spam.

### One-time activation required

FormSubmit requires the recipient to confirm ownership of the Gmail inbox. After deployment:

1. Submit one test inquiry from the live website (for example, company "Ignite Co Test").
2. Check **asher.igniteco@gmail.com** for the FormSubmit confirmation email (also check Spam/Promotions).
3. Click the activation link to enable delivery. FormSubmit may hold earlier submissions pending activation for up to 30 days.
4. Submit a second test, verify that the email contains name, company, work email, phone, and industry, then reply to the visitor's address if desired.

Until that confirmation happens, automatic email delivery **cannot be considered verified**.

## Files

- `index.html`: content and single lead form
- `script.js`: interactive demo and email form handler
- `styles.css`, `enhancements.css`, `pricing.css`, `mobile-modal.css`, `lifecycle.css`: styling
- `enhancements.js`, `mobile-modal.js`: animation, gallery, modal behavior
- `thank-you.html`: branded form success page

## Notes

- The previous Supabase API handler and SQL migration are no longer referenced by the contact form and require no configuration.
- Contact details are processed by FormSubmit as a third-party form email service; review its privacy terms before collecting sensitive information.
- Customer examples in the demo are illustrative, not real live customer data.
- No public pricing is shown.
