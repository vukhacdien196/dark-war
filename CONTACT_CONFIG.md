# 📞 Cấu hình Thông tin Liên hệ - Hướng dẫn Nhanh

## 🚀 Cách sửa thông tin liên hệ (NHANH NHẤT)

### Bước 1: Mở file `app/app.config.ts`

### Bước 2: Sửa thông tin tại đây:

```typescript
export default defineAppConfig({
  contact: {
    zalo: 'https://zalo.me/0913910209',      // 👈 Link Zalo
    facebook: 'https://zalo.me/0913910209',  // 👈 Link Facebook  
    phone: '0913910209',                      // 👈 Số điện thoại
    phoneLink: 'tel:0913910209',             // 👈 Link gọi điện
  }
})
```

### Bước 3: Lưu file (Ctrl+S)

### ✅ Khi nào có hiệu lực?

| Môi trường | Cách thức | Thời gian |
|------------|-----------|-----------|
| **Development** (`npm run dev`) | Lưu file → Tự động reload | ⚡ **Ngay lập tức** |
| **Production** (`npm run build`) | Lưu file → Build lại | 🔄 Sau khi build |

---

## 💡 Cách sử dụng trong Component

```vue
<script setup>
const appConfig = useAppConfig()
</script>

<template>
  <!-- Link Zalo -->
  <a :href="appConfig.contact.zalo" target="_blank">
    Chat Zalo
  </a>

  <!-- Link Facebook -->
  <a :href="appConfig.contact.facebook" target="_blank">
    Facebook
  </a>

  <!-- Link gọi điện -->
  <a :href="appConfig.contact.phoneLink">
    {{ appConfig.contact.phone }}
  </a>
</template>
```

---

## 📦 Component có sẵn

Đã tạo sẵn component `ContactLinks.vue` để sử dụng:

```vue
<template>
  <ContactLinks />
</template>
```

Component này sẽ hiển thị:
- 🔵 Nút Zalo (màu xanh Zalo)
- 🔵 Nút Facebook (màu xanh Facebook)  
- 🟢 Nút gọi điện (màu xanh lá)

---

## 🎯 Lợi ích của phương pháp này

✅ **Hot Reload**: Thay đổi ngay lập tức khi dev, không cần restart server  
✅ **Tập trung**: Tất cả cấu hình ở 1 file duy nhất  
✅ **TypeScript**: Có gợi ý code và kiểm tra lỗi  
✅ **Dễ bảo trì**: Muốn đổi số điện thoại? Chỉ sửa 1 chỗ  

---

## 🔗 Thông tin liên hệ hiện tại

- **Zalo**: [https://zalo.me/0913910209](https://zalo.me/0913910209)
- **Facebook**: [https://zalo.me/0913910209](https://zalo.me/0913910209)
- **Phone**: 0913910209

---

## 📚 Xem thêm

Để biết thêm chi tiết và các phương pháp khác, xem file [CONFIG_GUIDE.md](./CONFIG_GUIDE.md)

