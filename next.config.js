module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.bitskistatic.com",
      "www.bitski.com"
    ]
  },
  sassOptions: {

    prependData: `
      $background_color: ${process.env.NEXT_PUBLIC_BACKGROUND_COLOR}; 
      $headlineFontLocal: "${process.env.NEXT_PUBLIC_HEADLINES_FONT_FAMILY}";
      $bodyFontLocal: "${process.env.NEXT_PUBLIC_BODY_FONT_FAMILY}";
      $headlineFontGoogleURL: "${process.env.NEXT_PUBLIC_GOOGLEFONT_HEADLINES_URL}";
      $headlineFontGoogleFont: "${process.env.NEXT_PUBLIC_GOOGLEFONT_HEADLINES_FONT_FAMILY}";
      $bodyFontGoogleURL: "${process.env.NEXT_PUBLIC_GOOGLEFONT_BOY_URL}";
      $bodyFontGoogleFont: "${process.env.NEXT_PUBLIC_GOOGLEFONT_BOY_FONT_FAMILY}";
      $color-primary: ${process.env.NEXT_PUBLIC_PRIMARY_COLOR};
    `,
  }
}
