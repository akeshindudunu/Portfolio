import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Insert data into MySQL database safely using parameterized queries
    const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    await pool.execute(query, [name, email, message]);

    return NextResponse.json(
      { message: 'Message saved successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error. Please try again later.' },
      { status: 500 }
    );
  }
}