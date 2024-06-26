// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { StreamChat } from 'https://esm.sh/stream-chat@8.13.1';

console.log('Hello from Functions!');

console.log('Connected');

serve(async (req: any) => {
  const { name } = await req.json();

  const serverClient = new StreamChat(
    '68yr8cv2k5b6',
    'autypwyh7kn6w5u65zkedbvgdr2k7s63mva93wg6zfevjxmnurgkfwb629adeguh'
  );

  // const token = serverClient.createToken(name);

  return new Response(JSON.stringify({ token: 'abc' }), {
    headers: { 'Content-Type': 'application/json' },
  });
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'

// https://zpxroahxcmviesjrujot.supabase.co/functions/v1/stream-token

// curl -i --location --request POST 'https://zpxroahxcmviesjrujot.supabase.co/functions/v1/stream-token' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpweHJvYWh4Y212aWVzanJ1am90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4MTc4NTgsImV4cCI6MjAxMzM5Mzg1OH0.RPg48z_wAOo6xvHzwnhsYsqqHBeItpsKHPEEmppdWaw' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'

// curl -i --location --request POST 'https://wmaslehxmzwklcgyozro.supabase.co/functions/v1/stream-token' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'