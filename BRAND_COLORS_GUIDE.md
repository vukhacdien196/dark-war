# Hướng Dẫn Sử Dụng Màu Sắc Sao Vàng

## 🎨 **Bảng Màu Chuyên Nghiệp**

### **Màu Chính (Primary Colors)**
- **Xanh Cyan**: `#00AEEF` - Màu chủ đạo từ chữ "SV"
- **Vàng Gold**: `#FFB300` - Màu từ ngôi sao
- **Đen**: `#000000` - Nền logo

### **Màu Phụ (Secondary Colors)**
- **Xanh Đậm**: `#0078D4` - Cho hover states
- **Vàng Đậm**: `#E6A200` - Cho accents
- **Xám Đậm**: `#212121` - Cho backgrounds

## 🚀 **Cách Sử Dụng**

### **1. Với Tailwind CSS**
```html
<!-- Màu chính -->
<div class="bg-sv-primary text-white">Xanh cyan chính</div>
<div class="bg-sv-gold text-white">Vàng gold</div>

<!-- Màu phụ -->
<div class="bg-sv-secondary-blue text-white">Xanh đậm</div>
<div class="bg-sv-secondary-gold text-white">Vàng đậm</div>

<!-- Gradient -->
<div class="bg-gradient-sv text-white">Gradient xanh</div>
<div class="bg-gradient-gold text-white">Gradient vàng</div>

<!-- Text colors -->
<h1 class="text-sv-primary">Tiêu đề xanh</h1>
<h2 class="text-sv-gold">Tiêu đề vàng</h2>
```

### **2. Với CSS Variables**
```css
.my-element {
  background-color: var(--sv-primary-blue);
  color: var(--sv-white);
  border: 2px solid var(--sv-primary-gold);
}
```

### **3. Với Utility Classes**
```html
<!-- Buttons -->
<button class="btn-sv-primary">Nút chính</button>
<button class="btn-sv-gold">Nút phụ</button>

<!-- Cards -->
<div class="card-sv">Thẻ nội dung</div>

<!-- Shadows -->
<div class="shadow-sv">Bóng xanh</div>
<div class="shadow-gold">Bóng vàng</div>
```

## 🎯 **Ứng Dụng Cụ Thể**

### **Header/Navigation**
```html
<nav class="bg-sv-dark text-white">
  <div class="container mx-auto px-4 py-4">
    <div class="flex items-center justify-between">
      <div class="text-sv-gold font-bold text-xl">Sao Vàng</div>
      <div class="space-x-4">
        <a class="text-white hover:text-sv-primary">Trang chủ</a>
        <a class="text-white hover:text-sv-primary">Sản phẩm</a>
      </div>
    </div>
  </div>
</nav>
```

### **Buttons**
```html
<!-- Primary Button -->
<button class="btn-sv-primary hover:shadow-sv">
  Liên hệ ngay
</button>

<!-- Secondary Button -->
<button class="btn-sv-gold hover:shadow-gold">
  Xem sản phẩm
</button>

<!-- Outline Button -->
<button class="border-2 border-sv-primary text-sv-primary hover:bg-sv-primary hover:text-white">
  Tìm hiểu thêm
</button>
```

### **Cards**
```html
<div class="card-sv p-6">
  <h3 class="text-sv-primary font-bold mb-4">Sản phẩm nổi bật</h3>
  <p class="text-sv-dark mb-4">Mô tả sản phẩm...</p>
  <button class="btn-sv-primary">Xem chi tiết</button>
</div>
```

### **Forms**
```html
<form class="space-y-4">
  <div>
    <label class="text-sv-dark font-semibold">Họ và tên</label>
    <input class="input-sv w-full" type="text" placeholder="Nhập họ tên">
  </div>
  <div>
    <label class="text-sv-dark font-semibold">Email</label>
    <input class="input-sv w-full" type="email" placeholder="Nhập email">
  </div>
  <button class="btn-sv-primary w-full">Gửi</button>
</form>
```

## 🎨 **Color Combinations**

### **Professional Look**
- **Primary**: Xanh cyan (`#00AEEF`)
- **Secondary**: Vàng gold (`#FFB300`)
- **Background**: Trắng (`#FFFFFF`)
- **Text**: Xám đậm (`#333333`)

### **Modern Look**
- **Primary**: Xanh cyan (`#00AEEF`)
- **Secondary**: Xanh đậm (`#0078D4`)
- **Background**: Xám nhạt (`#F8F8F8`)
- **Text**: Xám đậm (`#333333`)

### **Luxury Look**
- **Primary**: Vàng gold (`#FFB300`)
- **Secondary**: Đen (`#000000`)
- **Background**: Trắng (`#FFFFFF`)
- **Text**: Xám đậm (`#333333`)

## 📱 **Responsive Design**

### **Mobile First**
```css
/* Mobile */
.btn-sv-primary {
  padding: 10px 20px;
  font-size: 14px;
}

/* Tablet */
@media (min-width: 768px) {
  .btn-sv-primary {
    padding: 12px 24px;
    font-size: 16px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .btn-sv-primary {
    padding: 14px 28px;
    font-size: 18px;
  }
}
```

## 🔧 **Customization**

### **Thay Đổi Màu**
```css
:root {
  --sv-primary-blue: #00AEEF;  /* Thay đổi màu chính */
  --sv-primary-gold: #FFB300; /* Thay đổi màu phụ */
}
```

### **Thêm Màu Mới**
```css
:root {
  --sv-accent-purple: #8B5CF6; /* Màu accent mới */
}
```

## 📋 **Best Practices**

### ✅ **Do's**
- Sử dụng màu chính cho CTA buttons
- Sử dụng màu phụ cho accents
- Giữ contrast ratio tốt
- Sử dụng gradient cho hiệu ứng đẹp

### ❌ **Don'ts**
- Không sử dụng quá nhiều màu
- Không bỏ qua accessibility
- Không sử dụng màu quá sáng cho text
- Không sử dụng màu quá tối cho background

## 🎯 **Kết Quả**

Với bảng màu này, website Sao Vàng sẽ có:
- ✅ Giao diện chuyên nghiệp và hiện đại
- ✅ Thương hiệu nhất quán
- ✅ Trải nghiệm người dùng tốt
- ✅ Dễ dàng maintain và scale
