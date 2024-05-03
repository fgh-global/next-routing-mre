export type TPageData = Record<
  string,
  {
    title: string;
    body: string;
  }
>;

const pages: Record<string, { title: string; body: string }> = {
  "/": {
      title: "Home",
      body: `<h1>Welcome to Our Website</h1><p>This is our home page. Here you can find an overview of what we do and how we can help you.</p><p>Explore our site to learn more about our services and offerings!</p>`
  },
  "/about": {
      title: "About Us",
      body: `<h1>About Our Company</h1><p>We are committed to delivering excellent service and innovative solutions.</p><p>Our team is dedicated to ensuring client satisfaction through integrity and professionalism.</p>`
  },
  "/about/our-story": {
      title: "Our Story",
      body: `<h1>Our Story</h1><p>Learn how our company came to be and the values that drive our mission.</p><p>From humble beginnings to a market leader, discover our journey.</p>`
  },
  "/contact": {
      title: "Contact Us",
      body: `<h1>Get in Touch</h1><p>Contact us today to find out how we can assist you with your needs.</p><p>Email us or call us directly at the numbers provided on this page.</p>`
  },
  "/services": {
      title: "Our Services",
      body: `<h1>Explore Our Services</h1><p>Discover the wide range of services we offer to help you achieve your goals.</p><p>We specialize in customized solutions for our clients.</p>`
  },
  "/blog": {
      title: "Blog",
      body: `<h1>Latest Updates</h1><p>Read our latest blog posts to stay updated on industry trends and company news.</p><p>Our blog features insights from our experts and case studies on recent projects.</p>`
  }
};

export default pages;
