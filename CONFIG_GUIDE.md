# Hướng dẫn Cấu hình Thông tin Liên hệ

## 📋 Tổng quan

Dự án hỗ trợ **2 cách** lưu trữ cấu hình thông tin liên hệ:

### ✅ Cách 1: `app/app.config.ts` (KHUYẾN NGHỊ) ⭐
- ✨ **Hot Reload**: Tự động cập nhật khi sửa, không cần restart
- 🔄 **Reactive**: Thay đổi ngay lập tức trên web khi dev
- 📝 **TypeScript**: Có gợi ý code và kiểm tra type
- 🚀 **Đơn giản**: Chỉ cần sửa file và lưu

### ✅ Cách 2: `config/contact.json`
- 📊 **Dễ đọc**: Format JSON đơn giản
- 🔧 **Linh hoạt**: Có thể import từ nhiều nơi
- ⚠️ **Cần build lại**: Phải build lại khi thay đổi

---

## 🔧 Cách 1: Sử dụng `app/app.config.ts` (Khuyến nghị)

### Chỉnh sửa cấu hình:

```typescript
// File: app/app.config.ts
export default defineAppConfig({
  contact: {
    zalo: 'https://zalo.me/0913910209',
    facebook: 'https://zalo.me/0913910209',
    phone: '0913910209',
    phoneLink: 'tel:0913910209',
  }
})
```

### Sử dụng trong component:

```vue
<script setup>
const appConfig = useAppConfig()
</script>

<template>
  <a :href="appConfig.contact.zalo">Zalo</a>
  <a :href="appConfig.contact.facebook">Facebook</a>
  <a :href="appConfig.contact.phoneLink">{{ appConfig.contact.phone }}</a>
</template>
```

### Khi nào thay đổi có hiệu lực?

| Môi trường | Cách cập nhật | Thời gian |
|------------|---------------|-----------|
| **Development** (`npm run dev`) | Lưu file → Tự động reload | ⚡ Ngay lập tức |
| **Production** (`npm run build`) | Lưu file → Build lại → Deploy | 🔄 Sau khi build |

---

## 📁 Cách 2: Sử dụng `config/contact.json`

### Chỉnh sửa cấu hình:

```json
{
  "contact": {
    "zalo": "https://zalo.me/0913910209",
    "facebook": "https://zalo.me/0913910209",
    "phone": "0913910209",
    "phoneLink": "tel:0913910209"
  },
  "social": {
    "zalo": {
      "url": "https://zalo.me/0913910209",
      "icon": "pi pi-comments",
      "label": "Chat Zalo"
    },
    "facebook": {
      "url": "https://zalo.me/0913910209",
      "icon": "pi pi-facebook",
      "label": "Facebook"
    },
    "phone": {
      "url": "tel:0913910209",
      "number": "0913910209",
      "icon": "pi pi-phone",
      "label": "Gọi điện"
    }
  }
}
```

### Sử dụng trong component:

```vue
<script setup>
import contactJson from '~/config/contact.json'
</script>

<template>
  <a :href="contactJson.contact.zalo">Zalo</a>
  <a :href="contactJson.contact.facebook">Facebook</a>
  <a :href="contactJson.contact.phoneLink">{{ contactJson.contact.phone }}</a>
</template>
```

### Khi nào thay đổi có hiệu lực?

| Môi trường | Cách cập nhật | Thời gian |
|------------|---------------|-----------|
| **Development** | Lưu file → **Restart server** | ⚠️ Cần restart |
| **Production** | Lưu file → Build lại → Deploy | 🔄 Sau khi build |

---

## 🎯 So sánh 2 phương pháp

| Tiêu chí | app.config.ts | contact.json |
|----------|---------------|--------------|
| Hot Reload (Dev) | ✅ Có | ❌ Không (cần restart) |
| TypeScript Support | ✅ Có | ❌ Không |
| Dễ chỉnh sửa | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Reactive | ✅ Có | ❌ Không |
| File size | Nhỏ | Nhỏ |

**💡 Khuyến nghị**: Dùng `app.config.ts` vì có hot reload và TypeScript support.

---

## 🚀 Demo Component

Đã tạo component mẫu: `app/components/ContactLinks.vue`

### Cách sử dụng:

```vue
<template>
  <ContactLinks />
</template>
```

Component này hiển thị cả 2 cách sử dụng để bạn so sánh.

---

## 📝 Lưu ý quan trọng

### ✅ Khi sửa `app/app.config.ts`:
1. Mở file `app/app.config.ts`
2. Sửa thông tin liên hệ
3. Lưu file (Ctrl+S)
4. **Development**: Web tự động cập nhật ⚡
5. **Production**: Chạy `npm run build` để cập nhật

### ✅ Khi sửa `config/contact.json`:
1. Mở file `config/contact.json`
2. Sửa thông tin liên hệ
3. Lưu file (Ctrl+S)
4. **Development**: Restart server (Ctrl+C → `npm run dev`)
5. **Production**: Chạy `npm run build` để cập nhật

### ⚠️ Lưu ý Production:
- Sau khi build, file config được "đóng gói" vào code
- Muốn thay đổi trên production → Phải build lại
- Không thể thay đổi bằng cách chỉnh sửa file config trực tiếp trên server

---

## 🔗 Thông tin liên hệ hiện tại

- **Zalo**: https://zalo.me/0913910209
- **Facebook**: https://zalo.me/0913910209
- **Phone**: 0913910209
- **Phone Link**: tel:0913910209

---

## 🛠️ Troubleshooting

**Q: Sửa file config nhưng web không thay đổi?**
- A: Nếu dùng `app.config.ts` → Kiểm tra console có lỗi không
- A: Nếu dùng `contact.json` → Restart server

**Q: Muốn thêm thông tin liên hệ mới (email, địa chỉ)?**
- A: Thêm vào object `contact` trong file config:
  ```typescript
  contact: {
    // ... existing
    email: 'info@example.com',
    address: '123 ABC Street',
  }
  ```

**Q: Làm sao biết đang dùng config nào?**
- A: Xem trong component, tìm `useAppConfig()` hoặc `import ... from '~/config/contact.json'`

