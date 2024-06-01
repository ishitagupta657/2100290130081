const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/products',
          permanent: false, // Use true if this is a permanent redirect
        },
      ]
    },
  }
  
  export default nextConfig