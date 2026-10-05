import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // output: "standalone",
  allowedDevOrigins: ["127.0.0.1"],
};

export default withFlowbiteReact(nextConfig);
