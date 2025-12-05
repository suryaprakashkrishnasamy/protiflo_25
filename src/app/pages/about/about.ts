import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  definition: string;
  description: string;
  interviewQuestions: {
    question: string;
    answer: string;
  }[];
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  selectedSkill: Skill | null = null;
  showModal = false;

  skills: { [category: string]: Skill[] } = {
    'Backend Development': [
      {
        name: '.NET',
        definition: '.NET is a free, cross-platform, open-source developer platform for building different types of applications.',
        description: 'Microsoft\'s comprehensive development platform that supports multiple programming languages and can be used to build web, mobile, desktop, and cloud applications.',
        interviewQuestions: [
          {
            question: 'What is the difference between .NET Framework and .NET Core?',
            answer: '.NET Framework is Windows-only and monolithic, while .NET Core (now .NET 5+) is cross-platform, modular, and open-source. .NET Core offers better performance and supports modern development practices.'
          },
          {
            question: 'Explain the Common Language Runtime (CLR).',
            answer: 'CLR is the execution environment in .NET that handles memory management, garbage collection, exception handling, and provides services like type safety and security. It converts IL code to machine code through JIT compilation.'
          },
          {
            question: 'What is Dependency Injection in .NET?',
            answer: 'DI is a design pattern where objects receive their dependencies from external sources rather than creating them internally. .NET Core has built-in DI container that manages object lifetimes and resolves dependencies automatically.'
          }
        ]
      },
      {
        name: 'C#',
        definition: 'C# is a general-purpose, multi-paradigm programming language developed by Microsoft as part of its .NET initiative.',
        description: 'Object-oriented programming language that combines the computing power of C++ with the programming ease of Visual Basic. It\'s type-safe and designed for building robust applications.',
        interviewQuestions: [
          {
            question: 'What are the different types of collections in C#?',
            answer: 'C# has Generic collections (List<T>, Dictionary<K,V>, HashSet<T>), Non-generic collections (ArrayList, Hashtable), and Concurrent collections (ConcurrentBag<T>, ConcurrentDictionary<K,V>) for thread-safe operations.'
          },
          {
            question: 'Explain async/await in C#.',
            answer: 'Async/await enables asynchronous programming. \'async\' keyword marks a method as asynchronous, \'await\' suspends execution until the task completes. It improves application responsiveness by not blocking the calling thread.'
          },
          {
            question: 'What is the difference between IEnumerable and IQueryable?',
            answer: 'IEnumerable works with in-memory collections and executes queries on the client side. IQueryable works with remote data sources like databases and translates expressions to SQL for server-side execution.'
          }
        ]
      },
      {
        name: 'API Development',
        definition: 'API Development involves creating Application Programming Interfaces that allow different software applications to communicate with each other.',
        description: 'Building RESTful services, Web APIs, and microservices that expose business logic and data to various clients including web applications, mobile apps, and third-party systems.',
        interviewQuestions: [
          {
            question: 'What are the principles of RESTful API design?',
            answer: 'REST principles include: Stateless communication, Resource-based URLs, HTTP methods (GET, POST, PUT, DELETE), Uniform interface, Client-server architecture, and Cacheable responses.'
          },
          {
            question: 'How do you handle API versioning?',
            answer: 'Common approaches include URL versioning (/v1/users), Header versioning (Accept: application/vnd.api+json;version=1), Query parameter versioning (?version=1), and Content negotiation.'
          },
          {
            question: 'What is API rate limiting and how do you implement it?',
            answer: 'Rate limiting controls the number of requests a client can make within a time window. Implementation methods include token bucket algorithm, sliding window, and can be done using middleware, API gateways, or caching layers like Redis.'
          }
        ]
      },
      {
        name: 'SQL',
        definition: 'SQL (Structured Query Language) is a domain-specific language used for managing and manipulating relational databases.',
        description: 'Standard language for relational database management systems, used for querying, updating, and managing data. Essential for data retrieval, reporting, and database administration.',
        interviewQuestions: [
          {
            question: 'What is the difference between INNER JOIN and LEFT JOIN?',
            answer: 'INNER JOIN returns only matching records from both tables. LEFT JOIN returns all records from the left table and matching records from the right table, with NULL values for non-matching right table records.'
          },
          {
            question: 'Explain database normalization.',
            answer: 'Normalization organizes data to reduce redundancy and improve data integrity. 1NF: Atomic values, 2NF: No partial dependencies, 3NF: No transitive dependencies. Higher normal forms exist for specific scenarios.'
          },
          {
            question: 'How do you optimize a slow SQL query?',
            answer: 'Optimization techniques include: adding appropriate indexes, analyzing execution plans, avoiding SELECT *, using proper WHERE clauses, optimizing JOINs, considering query rewriting, and updating database statistics.'
          }
        ]
      }
    ],
    'Frontend Development': [
      {
        name: 'Angular',
        definition: 'Angular is a TypeScript-based open-source web application framework developed by Google for building single-page applications.',
        description: 'Comprehensive framework that provides tools and features for building scalable web applications with features like dependency injection, routing, forms, and HTTP client.',
        interviewQuestions: [
          {
            question: 'What is the difference between AngularJS and Angular?',
            answer: 'AngularJS (1.x) uses JavaScript and MVC architecture. Angular (2+) uses TypeScript, component-based architecture, better performance, mobile support, and improved dependency injection.'
          },
          {
            question: 'Explain Angular component lifecycle hooks.',
            answer: 'Key lifecycle hooks: ngOnInit (after component initialization), ngOnChanges (when input properties change), ngOnDestroy (before component destruction), ngAfterViewInit (after view initialization).'
          },
          {
            question: 'What are Angular Observables and how do they differ from Promises?',
            answer: 'Observables are streams that can emit multiple values over time and are cancellable. Promises handle single async operations and are not cancellable. Observables support operators for data transformation.'
          }
        ]
      },
      {
        name: 'HTML',
        definition: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications.',
        description: 'Foundation of web development that structures content using elements and tags. Works with CSS for styling and JavaScript for interactivity.',
        interviewQuestions: [
          {
            question: 'What is semantic HTML and why is it important?',
            answer: 'Semantic HTML uses meaningful tags (header, nav, article, section) that describe content structure. It improves accessibility, SEO, and code maintainability by providing context to browsers and screen readers.'
          },
          {
            question: 'Explain the difference between block and inline elements.',
            answer: 'Block elements (div, p, h1) take full width and start on new lines. Inline elements (span, a, img) only take necessary width and don\'t start new lines. Inline-block combines both behaviors.'
          },
          {
            question: 'What are HTML5 new features?',
            answer: 'HTML5 introduced semantic elements (article, section), new input types (email, date), Canvas API, Web Storage (localStorage/sessionStorage), Geolocation API, and multimedia elements (video, audio).'
          }
        ]
      },
      {
        name: 'CSS',
        definition: 'CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML.',
        description: 'Styling language that controls the visual appearance of web pages including layout, colors, fonts, and responsive design across different devices.',
        interviewQuestions: [
          {
            question: 'Explain the CSS Box Model.',
            answer: 'The box model consists of: Content (actual content), Padding (space inside the border), Border (edge of the element), and Margin (space outside the border). Total width = content + padding + border + margin.'
          },
          {
            question: 'What is the difference between Flexbox and CSS Grid?',
            answer: 'Flexbox is one-dimensional (row or column) layout for distributing space among items. CSS Grid is two-dimensional layout system for creating complex layouts with rows and columns simultaneously.'
          },
          {
            question: 'How do CSS specificity rules work?',
            answer: 'Specificity determines which CSS rule applies when multiple rules target the same element. Order: !important > Inline styles > IDs > Classes/Attributes/Pseudo-classes > Elements > Universal selector.'
          }
        ]
      },
      {
        name: 'JavaScript',
        definition: 'JavaScript is a high-level, interpreted programming language that is a core technology of the World Wide Web.',
        description: 'Dynamic programming language essential for web development, enabling interactive user interfaces, client-side validation, and modern web application functionality.',
        interviewQuestions: [
          {
            question: 'What is the difference between let, const, and var?',
            answer: 'var has function scope and is hoisted. let has block scope and temporal dead zone. const has block scope, temporal dead zone, and cannot be reassigned (but objects/arrays can be mutated).'
          },
          {
            question: 'Explain closures in JavaScript.',
            answer: 'A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned. It "closes over" variables from its lexical environment.'
          },
          {
            question: 'What is event delegation and why is it useful?',
            answer: 'Event delegation uses event bubbling to handle events at a parent element instead of individual child elements. It\'s useful for dynamic content, better performance, and managing many similar elements.'
          }
        ]
      }
    ],
    'Cloud & Others': [
      {
        name: 'Cloud',
        definition: 'Cloud computing is the delivery of computing services over the internet, including servers, storage, databases, networking, and software.',
        description: 'Modern approach to hosting and scaling applications using platforms like Azure, AWS, or Google Cloud, providing flexibility, scalability, and cost-effectiveness.',
        interviewQuestions: [
          {
            question: 'What are the different cloud service models?',
            answer: 'IaaS (Infrastructure as a Service) - Virtual machines, storage. PaaS (Platform as a Service) - Development platforms. SaaS (Software as a Service) - Complete applications. Each offers different levels of control and management.'
          },
          {
            question: 'Explain the benefits of cloud computing.',
            answer: 'Benefits include: Cost reduction (pay-as-you-use), Scalability (auto-scaling), Reliability (high availability), Security (enterprise-grade), Global reach, and Disaster recovery capabilities.'
          },
          {
            question: 'What is the difference between horizontal and vertical scaling?',
            answer: 'Vertical scaling (scale up) increases power of existing machines (CPU, RAM). Horizontal scaling (scale out) adds more machines to the pool. Horizontal scaling offers better fault tolerance and is more cost-effective for large applications.'
          }
        ]
      },
      {
        name: 'Accessibility (508 compliance)',
        definition: 'Section 508 compliance ensures that electronic and information technology is accessible to people with disabilities.',
        description: 'Federal standard requiring government agencies to make their electronic content accessible, including websites, applications, and digital documents.',
        interviewQuestions: [
          {
            question: 'What are the key principles of web accessibility?',
            answer: 'WCAG principles: Perceivable (content can be perceived by users), Operable (interface components are operable), Understandable (information and UI operation are understandable), Robust (content can be interpreted by assistive technologies).'
          },
          {
            question: 'How do you implement keyboard navigation?',
            answer: 'Ensure all interactive elements are focusable using tabindex, provide visible focus indicators, implement logical tab order, support keyboard shortcuts, and handle escape key for modals and dropdowns.'
          },
          {
            question: 'What are ARIA attributes and when do you use them?',
            answer: 'ARIA (Accessible Rich Internet Applications) attributes provide additional semantic information to assistive technologies. Common ones: aria-label, aria-describedby, aria-expanded, role. Use when HTML semantics aren\'t sufficient.'
          }
        ]
      },
      {
        name: 'SQL Optimization',
        definition: 'SQL Optimization involves improving database query performance through various techniques and best practices.',
        description: 'Process of enhancing database queries to reduce execution time, minimize resource usage, and improve overall application performance.',
        interviewQuestions: [
          {
            question: 'What are database indexes and how do they improve performance?',
            answer: 'Indexes are database objects that improve query performance by creating shortcuts to data. They work like book indexes, allowing the database to find rows quickly without scanning entire tables. Trade-off: faster reads but slower writes.'
          },
          {
            question: 'Explain query execution plans.',
            answer: 'Execution plans show how the database engine will execute a query, including the order of operations, indexes used, and estimated costs. They help identify bottlenecks and optimization opportunities.'
          },
          {
            question: 'What are some common SQL performance anti-patterns?',
            answer: 'Common anti-patterns: Using SELECT *, N+1 query problems, not using appropriate indexes, inefficient WHERE clauses, unnecessary JOINs, not using LIMIT for large datasets, and Cartesian products in JOINs.'
          }
        ]
      }
    ]
  };

  openSkillModal(skill: Skill) {
    this.selectedSkill = skill;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedSkill = null;
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills[category] || [];
  }
}
