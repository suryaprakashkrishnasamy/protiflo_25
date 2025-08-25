import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  status: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: Project[] = [
    {
      id: 1,
      name: 'TagMatiks Asset Tracking',
      description: 'A comprehensive asset tracking solution using RFID technology for real-time inventory management and location tracking.',
      technologies: ['.NET', 'C#', 'Angular', 'SQL Server', 'RFID'],
      status: 'Production'
    },
    {
      id: 2,
      name: 'TagMatiks AT GOV',
      description: 'Government-focused asset tracking system with enhanced security features and compliance with federal regulations.',
      technologies: ['.NET Core', 'Angular', 'Azure', 'SQL', '508 Compliance'],
      status: 'Production'
    },
    {
      id: 3,
      name: 'TagMatiks AT Lite',
      description: 'Lightweight version of asset tracking for small to medium businesses with streamlined features and cost-effective implementation.',
      technologies: ['.NET', 'Angular', 'SQLite', 'Cloud API'],
      status: 'Production'
    },
    {
      id: 4,
      name: 'TagMatiks Admin',
      description: 'Administrative dashboard for managing multiple TagMatiks instances with comprehensive reporting and user management.',
      technologies: ['.NET', 'C#', 'Angular', 'SQL Server', 'Chart.js'],
      status: 'Production'
    },
    {
      id: 5,
      name: 'Print Management',
      description: 'Enterprise print management solution for tracking, controlling, and optimizing printing resources across organizations.',
      technologies: ['.NET Framework', 'WPF', 'SQL Server', 'Print APIs'],
      status: 'Production'
    },
    {
      id: 6,
      name: 'Retail',
      description: 'Point-of-sale and inventory management system for retail operations with real-time stock tracking and sales analytics.',
      technologies: ['.NET', 'Angular', 'SQL Server', 'Payment Gateway', 'API'],
      status: 'Development'
    },
    {
      id: 7,
      name: 'Track',
      description: 'Universal tracking platform for various types of assets and resources with customizable tracking parameters and reporting.',
      technologies: ['.NET Core', 'Angular', 'Azure SQL', 'SignalR', 'REST API'],
      status: 'Development'
    }
  ];

  trackByProjectId(index: number, project: Project): number {
    return project.id;
  }
}
