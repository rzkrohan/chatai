# 🤖 Rizky AI - Chat Interface

Website chat AI "Rizky AI" yang powered by **DeepSeek Model**. Interface modern dan responsif untuk percakapan dengan AI.

## 🎯 Fitur

- ✨ Interface chat yang modern dan responsif
- 🤖 Integrasi dengan DeepSeek API
- 💾 Riwayat percakapan
- ⚡ Real-time chat responses
- 🎨 Dark theme dengan gradient colors
- 📱 Mobile-friendly design
- ⌨️ Keyboard shortcuts (Shift+Enter untuk baris baru)

## 📋 Requirements

- Node.js v14 atau lebih tinggi
- npm atau yarn

## 🚀 Installasi & Menjalankan

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Server
```bash
npm start
```

Server akan berjalan di `http://localhost:3000`

### 3. Buka di Browser
```
http://localhost:3000
```

## 📁 File Structure

```
rizky-ai/
├── index.html          # Main HTML interface
├── style.css           # CSS styling
├── script.js           # Frontend JavaScript
├── server.js           # Backend Express server
├── deepseek.mjs        # DeepSeek API integration
├── package.json        # Dependencies & scripts
├── .gitignore         # Git ignore rules
├── .env.example       # Environment variables template
├── README.md          # Dokumentasi ini
└── DEPLOYMENT.md      # Guide untuk deploy
```

## 🔧 Konfigurasi

### Environment Variables (Optional)
Buat file `.env`:
```
PORT=3000
NODE_ENV=development
```

### Mengubah Port
Di `.env` atau direct di `server.js`:
```javascript
const PORT = process.env.PORT || 3000;
```

## 💻 API Endpoints

### Chat Endpoint
```
POST http://localhost:3000/api/chat
Content-Type: application/json

Body:
{
  "message": "Halo, apa kabar?"
}

Response:
{
  "response": "Halo! Saya baik-baik saja...",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

### Health Check
```
GET http://localhost:3000/api/health

Response:
{
  "status": "ok",
  "message": "Rizky AI Server is running",
  "model": "DeepSeek"
}
```

## 🎨 Customization

### Mengubah Warna
Edit di `style.css`:
```css
:root {
    --primary-color: #6366f1;      /* Warna utama */
    --secondary-color: #ec4899;    /* Warna sekunder */
    --bg-color: #0f172a;           /* Background */
}
```

### Mengubah Nama
Edit di `index.html`:
```html
<h1>Rizky AI</h1>
<span class="model-badge">DeepSeek Model</span>
```

## ⌨️ Keyboard Shortcuts

- **Enter**: Kirim pesan
- **Shift + Enter**: Baris baru

## 🚀 Deployment

### Railway.app (Recommended) ⭐
1. Push ke GitHub
2. Buka https://railway.app
3. Connect GitHub repository
4. Auto-deploy!

### Render.com
1. Push ke GitHub
2. Buka https://render.com
3. New Web Service
4. Select repository & deploy

### Self-Hosted
Lihat `DEPLOYMENT.md` untuk panduan lengkap.

## 🐛 Troubleshooting

### Port Already In Use
```bash
lsof -ti:3000 | xargs kill -9
npm start
```

### Module Not Found
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### DeepSeek API Error
- Check internet connection
- Verify DeepSeek endpoint accessibility
- Check request format

## 📚 Documentation

- **`README.md`** - File ini
- **`DEPLOYMENT.md`** - Deployment guide
- **`server.js`** - Backend server code
- **`script.js`** - Frontend logic

## 🔐 Security Notes

- Jangan commit `.env` file
- .gitignore sudah configured
- CORS headers included
- Input validation di backend

## 📦 Dependencies

```json
{
  "express": "^4.18.2",
  "axios": "^1.6.2",
  "cors": "^2.8.5"
}
```

## 🎓 Development Tips

### Check Server Status
```bash
curl http://localhost:3000/api/health
```

### Test Chat API
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Halo!"}'
```

### View Logs
Check browser console dan terminal untuk debug info.

## 📞 Support

- Check `DEPLOYMENT.md` untuk deployment issues
- Check browser console untuk JavaScript errors
- Check terminal untuk server errors

## 🎉 Next Steps

1. ✅ Install & run locally
2. ✅ Test chat functionality
3. ✅ Customize branding
4. ✅ Deploy ke production (Railway/Render)
5. ✅ Share dengan teman!

---

**Dibuat dengan ❤️ | Powered by DeepSeek**

Happy chatting! 🚀
