/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 safelist: [
      // Font Styles
      "italic",               // Italic text
      "not-italic",           // Remove italic
  
      // Font Weights
      "font-thin",            // Font weight 100
      "font-extralight",      // Font weight 200
      "font-light",           // Font weight 300
      "font-normal",          // Font weight 400
      "font-medium",          // Font weight 500
      "font-semibold",        // Font weight 600
      "font-bold",            // Font weight 700
      "font-extrabold",       // Font weight 800
      "font-black",           // Font weight 900
  
      // Font Families (Add custom fonts as needed)
      "font-sans",            // Sans-serif font
      "font-serif",           // Serif font
      "font-mono",            // Monospace font
  
      // Text Alignment
      "text-left",            // Align text left
      "text-center",          // Align text center
      "text-right",           // Align text right
      "text-justify",         // Justify text
  
      // Text Decoration
      "underline",            // Underline text
      "line-through",         // Strikethrough text
      "no-underline",         // Remove text underline
  
      // Text Transform
      "uppercase",            // Transform text to uppercase
      "lowercase",            // Transform text to lowercase
      "capitalize",           // Capitalize text
      "normal-case",          // Remove text transformation
  
      // Text Overflow
      "truncate",             // Truncate text with ellipsis
      "overflow-ellipsis",    // Add ellipsis when text overflows
      "overflow-clip",        // Clip text when it overflows
  
      // Letter Spacing
      "tracking-tighter",     // Tighter letter spacing
      "tracking-tight",       // Tight letter spacing
      "tracking-normal",      // Normal letter spacing
      "tracking-wide",        // Wide letter spacing
      "tracking-wider",       // Wider letter spacing
      "tracking-widest",      // Widest letter spacing
  
      // Line Height
      "leading-none",         // Line height none
      "leading-tight",        // Line height tight
      "leading-snug",         // Line height snug
      "leading-normal",       // Line height normal
      "leading-relaxed",      // Line height relaxed
      "leading-loose",        // Line height loose
  
      // Font Sizes
      "text-xs", "text-sm", "text-base", "text-lg", "text-xl",
      "text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl", "text-7xl", "text-8xl", "text-9xl",
  
      // Font Smoothing
      "antialiased",          // Enable font smoothing
      "subpixel-antialiased", // Subpixel smoothing
  
      // Font Variant Numeric
      "normal-nums",          // Normal number formatting
      "ordinal",              // Ordinal number formatting
      "slashed-zero",         // Slashed zero style
      "lining-nums",          // Lining number style
      "oldstyle-nums",        // Oldstyle number formatting
      "proportional-nums",    // Proportional number spacing
      "tabular-nums",         // Tabular number spacing
      "diagonal-fractions",   // Diagonal fractions
      "stacked-fractions",    // Stacked fractions
    ],

  
  










 



  theme: {
    extend: {},
  },
  plugins: [],
}