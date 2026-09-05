# Website Builder

A modular foundation for building legitimate demo, research, and commerce-style web experiences.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Shared UI components
- Service-oriented API layer

## Structure

```text
apps/
  web/       # Next.js frontend
  api/       # backend/API services
packages/
  ui/        # reusable UI primitives
  config/    # shared configuration
  types/     # shared TypeScript types
database/
  schema/
  migrations/
public/
```

## Development principles

- Keep presentation, business logic, and data access separated.
- Build reusable components instead of page-specific copies.
- Keep secrets out of source control.
- Treat authentication, payments, and user data as explicit backend concerns.
- Use mock/demo data for research and prototype flows until real services are intentionally integrated.
