module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "https://drive.google.com/file/d/1Y_eJk_k1tW7_Q6TGSzBVIjz4YGYZjWh5/view?usp=sharing",
        permanent: false,
      },
    ];
  },
}
