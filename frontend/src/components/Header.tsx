import { A } from "@solidjs/router";

const Header = () => {
  return (
    <div class="bg-blue-800 py-6 ">
      <div class="container mx-auto flex justify-between">
        <span class="text-3xl text-white font-bold tracking-tight">
          <A href="/" class="text-white hover:underline">
            HayatHotelBookings.com
          </A>{" "}
        </span>

        <span class="flex space-x-2 ">
          <A
            href="/sign-in"
            class="flex items-center bg-white text-blue-600 px-3 hover:bg-gray-100 font-bold "
          >
            Sign In
          </A>{" "}
        </span>
      </div>
    </div>
  );
};

export default Header;
