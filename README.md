# GOAT Notes

![Vercel Deploy](https://deploy-badge.vercel.app/vercel/fcc-goat-notes)

GOAT Notes is a modern note-taking application built with [Next.js](https://nextjs.org), [Supabase](https://supabase.com), and [Prisma](https://www.prisma.io). It allows users to create, edit, delete, and search notes, with additional features like AI-powered insights and a responsive design.

## Features

- **User Authentication**: Sign up, log in, and log out securely using Supabase.
- **Note Management**: Create, update, and delete notes with real-time updates.
- **AI Assistance**: Ask AI questions about your notes using OpenAI's GPT model.
- **Search Functionality**: Quickly search through your notes with fuzzy search.
- **Dark Mode**: Toggle between light and dark themes.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org), [React](https://reactjs.org), [Tailwind CSS](https://tailwindcss.com)
- **Backend**: [Supabase](https://supabase.com), [Prisma](https://www.prisma.io)
- **Database**: PostgreSQL
- **AI Integration**: [OpenAI](https://openai.com)
- **State Management**: React Context API
- **UI Components**: Radix UI, Lucide Icons

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Supabase account with API keys
- OpenAI API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dsabalete/fcc-goat-notes.git
   cd fcc-goat-notes
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:

   ```env
   SUPABASE_URL=<your-supabase-url>
   SUPABASE_ANON_KEY=<your-supabase-anon-key>
   OPENAI_API_KEY=<your-openai-api-key>
   DATABASE_URL=<your-database-url>
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. Run database migrations:

   ```bash
   npm run migrate
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── actions/           # Server actions for notes and user management
├── app/               # Next.js app directory
├── auth/              # Supabase authentication logic
├── components/        # Reusable UI components
├── db/                # Prisma schema and database client
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and constants
├── openai/            # OpenAI integration
├── providers/         # Context providers for state management
├── styles/            # Global and utility styles
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run start`: Start the production server.
- `npm run migrate`: Run database migrations.
- `npm run lint`: Run ESLint to check for code quality issues.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). Follow these steps:

1. Connect your GitHub repository to Vercel.
2. Add the environment variables in the Vercel dashboard.
3. Deploy your application.

For more details, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [OpenAI Documentation](https://platform.openai.com/docs)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vercel](https://vercel.com) for hosting.
- [Supabase](https://supabase.com) for authentication and database management.
- [OpenAI](https://openai.com) for AI-powered features.
- [Radix UI](https://www.radix-ui.com) and [Lucide Icons](https://lucide.dev) for UI components.
