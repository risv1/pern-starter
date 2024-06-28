import { API_URL } from "../lib/url";
import { Card, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Input } from "./ui/input";

export const RegisterForm = (props: { prompt: () => void }) => {
  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      const data = await response.json();
      console.log(data);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Card className="w-fit h-fit p-10 border-4 border-primary">
        <CardTitle>Register</CardTitle>
        <CardDescription className="mt-1 text-md">
          Enter your details
        </CardDescription>
        <CardContent>
          <form
            onSubmit={login}
            className="pt-10 flex gap-5 flex-col justify-center"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="font-semibold">
                Username
              </label>
              <Input
                type="text"
                id="username"
                name="username"
                className="border-primary border-2 focus:border-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                className="border-primary border-2 focus:border-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <Input
                type="password"
                id="password"
                name="password"
                className="border-primary border-2 focus:border-none"
              />
            </div>
            <button className="w-full bg-blue-500 text-white p-2 rounded">
              Sign up
            </button>
          </form>
          <div className="w-full h-fit flex justify-center mt-3">
            <p
              className="text-primary text-lg hover:cursor-pointer"
              onClick={props.prompt}
            >
              Already have an account? Login here!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
