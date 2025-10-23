import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contactForm: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  showSuccessMessage = false;
  showErrorMessage = false;

  // Replace with your Formspree endpoint
  private formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.isFormValid()) {
      this.isSubmitting = true;
      this.showErrorMessage = false;
      
      // Submit to Formspree
      const formData = {
        name: this.contactForm.name,
        email: this.contactForm.email,
        message: this.contactForm.message,
        _subject: `Portfolio Contact from ${this.contactForm.name}`,
        _replyto: this.contactForm.email
      };

      this.http.post(this.formspreeEndpoint, formData).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.showSuccessMessage = true;
          this.resetForm();
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 5000);
        },
        error: (error) => {
          this.isSubmitting = false;
          this.showErrorMessage = true;
          console.error('Form submission error:', error);
          
          // Hide error message after 5 seconds
          setTimeout(() => {
            this.showErrorMessage = false;
          }, 5000);
        }
      });
    }
  }

  isFormValid(): boolean {
    return !!(
      this.contactForm.name.trim() &&
      this.contactForm.email.trim() &&
      this.contactForm.message.trim() &&
      this.isValidEmail(this.contactForm.email)
    );
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      message: ''
    };
  }
}
