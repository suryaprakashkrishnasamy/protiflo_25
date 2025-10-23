# Email Setup Guide for Contact Form

This guide provides multiple options to receive emails from your portfolio contact form.

## Option 1: Formspree (Recommended - Free & Easy)

### Step 1: Sign up for Formspree
1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/xvgpbold`)

### Step 2: Update the code
1. In `src/app/pages/contact/contact.ts`, replace `YOUR_FORM_ID` with your actual Formspree ID:
   ```typescript
   private formspreeEndpoint = 'https://formspree.io/f/xvgpbold'; // Your actual endpoint
   ```

### Step 3: Test the form
1. Submit a test message through your portfolio
2. Check your email for the notification
3. Verify the form works correctly

**Pros:**
- Free up to 50 submissions/month
- No backend required
- Spam protection included
- Easy setup

**Cons:**
- Limited to 50 submissions on free plan
- Redirects to Formspree thank you page (can be customized)

---

## Option 2: EmailJS (Alternative - No Backend)

### Step 1: Sign up for EmailJS
1. Go to [emailjs.com](https://www.emailjs.com)
2. Create account and verify email
3. Create an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your service ID, template ID, and public key

### Step 2: Install EmailJS
```bash
npm install emailjs-com
```

### Step 3: Update contact.ts
```typescript
import emailjs from 'emailjs-com';

// In your component
onSubmit() {
  if (this.isFormValid()) {
    this.isSubmitting = true;
    
    const templateParams = {
      from_name: this.contactForm.name,
      from_email: this.contactForm.email,
      message: this.contactForm.message,
      to_email: 'suryakprakash04@gmail.com'
    };

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID', 
      templateParams,
      'YOUR_PUBLIC_KEY'
    ).then(() => {
      this.isSubmitting = false;
      this.showSuccessMessage = true;
      this.resetForm();
    }).catch((error) => {
      this.isSubmitting = false;
      this.showErrorMessage = true;
      console.error('EmailJS error:', error);
    });
  }
}
```

---

## Option 3: Netlify Forms (If using Netlify)

### Step 1: Add netlify attribute to form
```html
<form netlify name="contact" (ngSubmit)="onSubmit()">
  <!-- your form fields -->
</form>
```

### Step 2: Create static HTML version
Create a hidden HTML form for Netlify to detect:
```html
<form name="contact" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
</form>
```

---

## Option 4: Custom Backend API

### Step 1: Create a simple Node.js backend
```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Configure your email service
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-app-password'
    }
  });

  const mailOptions = {
    from: email,
    to: 'suryakprakash04@gmail.com',
    subject: `Portfolio Contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000);
```

### Step 2: Deploy backend to Heroku/Vercel
### Step 3: Update Angular to call your API

---

## Option 5: Direct mailto (Simple but Limited)

### Update contact form button:
```html
<a href="mailto:suryakprakash04@gmail.com?subject=Portfolio Contact&body=Please write your message here..." 
   class="btn">
   Send Email
</a>
```

**Pros:** 
- No setup required
- Works immediately

**Cons:** 
- Opens user's email client
- No form validation
- Poor user experience

---

## Recommended Implementation: Formspree

For your portfolio, I recommend **Formspree** because:

1. **Quick Setup**: Just replace the form endpoint
2. **Free**: 50 submissions/month is sufficient for a portfolio
3. **Professional**: Emails arrive in your inbox properly formatted
4. **No Backend**: Works with GitHub Pages hosting
5. **Spam Protection**: Built-in spam filtering

### Quick Setup Steps:

1. **Sign up**: Go to [formspree.io](https://formspree.io) and create account
2. **Create form**: Click "New Form" and use your email
3. **Get endpoint**: Copy the form URL (like `https://formspree.io/f/xvgpbold`)
4. **Update code**: Replace `YOUR_FORM_ID` in contact.ts with your actual ID
5. **Test**: Submit a test message and check your email

The code is already updated and ready - you just need to add your Formspree endpoint!

---

## Testing Checklist

- [ ] Form validates properly (required fields)
- [ ] Success message appears after submission
- [ ] Error message appears if submission fails
- [ ] Email arrives in your inbox
- [ ] Email contains all form data (name, email, message)
- [ ] Form resets after successful submission
- [ ] Loading state works during submission

That's it! Choose the option that works best for your needs.
