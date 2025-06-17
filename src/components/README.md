# Components Directory

This directory contains reusable React components for the ChatFeedback.chat website.

## CaseStudyShowcase.tsx

A comprehensive case study showcase component that displays professional testing reports in a beautiful, visual format. Features:

- Interactive tabbed navigation (Overview, Key Findings, Results, Client Feedback)
- Professional metrics visualization with before/after comparisons
- Detailed issue breakdown with severity levels
- Client testimonial integration
- Responsive design with smooth animations
- Call-to-action integration for scheduling consultations

### Usage

```tsx
import CaseStudyShowcase from './components/CaseStudyShowcase';

<CaseStudyShowcase onScheduleCall={openCalendly} />
```

### Customization

To customize the case study data, modify the `caseStudyData` object within the component. You can update:

- Client information
- Testing metrics and results
- Key findings and issues
- Testimonial content
- Visual styling and branding

This component demonstrates the professional quality and effectiveness of the adversarial testing service, helping to build trust and credibility with potential clients.