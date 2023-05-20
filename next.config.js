/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'user-images.githubusercontent.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination:
          'https://drive.google.com/file/d/1Af6E_eCtapnAysOZAWeuUgzEUAneFgMo/view?usp=sharing',
        permanent: true,
      },
      {
        source: '/publications/ecsdlt',
        destination:
          'https://drive.google.com/file/d/1I9HWrsDKy8cMwc6jxncCVUDowOHoWrCc/view',
        permanent: true,
      },
    ];
  },
};
