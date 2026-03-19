// tailwind.config.js - Sao Vàng Brand Colors
module.exports = {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./pages/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,vue,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        // Sao Vàng Brand Colors
        'sv': {
          // Primary Colors - Từ Logo
          'primary': {
            'blue': '#00AEEF',      // Xanh cyan chính từ chữ SV
            'gold': '#FFB300',     // Vàng gold từ ngôi sao
            'black': '#000000',    // Đen từ nền logo
          },
          
          // Secondary Colors - Biến thể
          'secondary': {
            'blue': '#0078D4',     // Xanh đậm cho hover
            'gold': '#E6A200',     // Vàng đậm cho accents
            'dark': '#212121',     // Xám đậm cho backgrounds
          },
          
          // Neutral Colors - Trung tính
          'white': '#FFFFFF',      // Trắng cho nền chính
          'light': '#F8F8F8',      // Xám nhạt cho nền phụ
          'medium': '#666666',     // Xám trung cho text phụ
          'dark': '#333333',       // Xám đậm cho text chính
        },
        
        // Semantic Colors - Màu ngữ nghĩa
        'success': '#10B981',      // Xanh lá cho thành công
        'warning': '#F59E0B',     // Cam cho cảnh báo
        'error': '#EF4444',        // Đỏ cho lỗi
        'info': '#00AEEF',         // Xanh cyan cho thông tin
      },
      
      // Custom Gradients
      backgroundImage: {
        'gradient-sv': 'linear-gradient(135deg, #00AEEF, #0078D4)',
        'gradient-gold': 'linear-gradient(135deg, #FFB300, #E6A200)',
        'gradient-dark': 'linear-gradient(135deg, #212121, #000000)',
      },
      
      // Custom Shadows
      boxShadow: {
        'sv': '0 4px 12px rgba(0, 174, 239, 0.15)',
        'gold': '0 4px 12px rgba(255, 179, 0, 0.15)',
        'dark': '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
      
      // Custom Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Custom Font Sizes
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      
      // Custom Border Radius
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
    },
  },
  plugins: [
    // Custom plugin for Sao Vàng utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.text-sv-primary': {
          color: '#00AEEF',
        },
        '.text-sv-gold': {
          color: '#FFB300',
        },
        '.bg-sv-primary': {
          backgroundColor: '#00AEEF',
        },
        '.bg-sv-gold': {
          backgroundColor: '#FFB300',
        },
        '.border-sv-primary': {
          borderColor: '#00AEEF',
        },
        '.border-sv-gold': {
          borderColor: '#FFB300',
        },
        '.btn-sv-primary': {
          background: 'linear-gradient(135deg, #00AEEF, #0078D4)',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '8px',
          fontWeight: '600',
          transition: 'all 0.3s ease',
        },
        '.btn-sv-gold': {
          background: 'linear-gradient(135deg, #FFB300, #E6A200)',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '8px',
          fontWeight: '600',
          transition: 'all 0.3s ease',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
