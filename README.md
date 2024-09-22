# Social AI App


## Installation guide

This example app uses:

- The latest version of [Next.js](https://nextjs.org/) app router and server functions.
- [Clerk](https://clerk.dev?utm_source=github&utm_medium=starters&utm_campaign=prisma) as an authentication provider.
- [Prisma](https://www.prisma.io/) for data storage.
- [Railway](https://railway.app/new) for database hosting.

## Installation instructions

To run the example locally, follow these steps:

1. **Clerk Setup**: 
   - Sign up for a Clerk account at [Clerk](http://clerk.dev/?utm_source=github&utm_medium=starters&utm_campaign=prisma).
   - Create a new Clerk project and obtain your **NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY** and **CLERK_SECRET_KEY**, as well as your webhook secret in the webhook settings for **WEBHOOK_SECRET** to allow clerk to communicate with the database on user account creation, update, ect.
   
2. **Gemini Setup**:
   - Sign up for an account at [Gemini](https://gemini.com/).
   - Obtain your **GEMINI_API_KEY** for API integration, which is found in settings -> api keys.
   
3. **Clone the Repository**:
   - Clone this repository:
     ```bash
     git clone git@github.com:clerkinc/clerk-prisma-starter.git
     ```
     
4. **Set up Environment Variables**:
   - Fill in the following keys in the `.env` file:
     ```plaintext
     DATABASE_URL=your_railway_database_url
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
     CLERK_SECRET_KEY=your_clerk_secret_key
     GEMINI_API_KEY=your_gemini_api_key
     WEBHOOK_SECRET=your_clerk_webhook_secret
     ```

5. **Railway Database Setup**:
   - Sign up at [Railway](https://railway.app/new).
   - Create a new project, set up a PostgreSQL database, and get your **DATABASE_URL** from the Railway project settings.
   - Add your `DATABASE_URL` to the `.env` file.

6. **Prisma Setup**:
   - Run the following command to generate Prisma client and apply the schema to the Railway database:
     ```bash
     npx prisma generate
     npx prisma migrate dev
     ```
   
7. **Install Dependencies**:
   - Install the required npm packages by running:
     ```bash
     npm install
     ```
     
8. **Start Development Server**:
   - Start the development server by running:
     ```bash
     npm run dev
     ```
   - Your app should now be running locally at [http://localhost:3000](http://localhost:3000).


!
