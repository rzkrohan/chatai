# 🚀 Deploy Rizky AI

Panduan lengkap untuk deploy website Rizky AI ke berbagai platform hosting.

## 🎯 Platform Rekomendasi

### 1️⃣ **Railway.app** ⭐ RECOMMENDED
- ✅ Paling mudah setup
- ✅ Free tier tersedia
- ✅ Auto-deploy dari GitHub
- ✅ Unlimited bandwidth
- ✅ Custom domain support

### 2️⃣ **Render.com**
- ✅ Free tier (dengan sleep)
- ✅ Auto-deploy
- ✅ Easy database setup
- ✅ SSL included

### 3️⃣ **Heroku** (Sekarang Bayar)
- Dulu gratis, sekarang ada biaya
- Stable & reliable
- Banyak add-ons

### 4️⃣ **Self-Hosted**
- Full control
- Biaya VPS (~$5/month)
- Perlu manage server

---

## 🚂 Deploy ke Railway.app (RECOMMENDED)

Railway adalah yang paling simple dan gratis untuk personal projects.

### Step 1: Prepare Repository

```bash
git init
git add .
git commit -m "Initial Rizky AI commit"
```

### Step 2: Push ke GitHub

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rizky-ai.git
git push -u origin main
```

### Step 3: Connect Railway

1. Buka https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Authorize Railway
5. Select repository "rizky-ai"
6. Click "Deploy"

### Step 4: Railway Auto-Configure

Railway akan auto-detect Node.js project dan setup. Tunggu selesai.

### Step 5: Get Production URL

Railway automatically gives you a domain:
```
https://rizky-ai-production.up.railway.app
```

Atau add custom domain di Railway dashboard.

---

## 🎨 Deploy ke Render.com

### Step 1: Connect Repository

1. Buka https://render.com
2. Click "New +"
3. Select "Web Service"
4. Connect GitHub account
5. Select "rizky-ai" repository

### Step 2: Configure

```
Name: rizky-ai
Environment: Node
Build Command: npm install
Start Command: npm start
```

### Step 3: Deploy

Click "Create Web Service" dan tunggu selesai.

**Note**: Free tier di Render akan sleep. Upgrade untuk always-on.

---

## 💻 Local Development

### Start Server

```bash
npm install
npm start
```

Server akan run di `http://localhost:3000`

### Test Chat API

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Halo!"}'
```

---

## 🖥️ Self-Hosted (Digital Ocean / Linode)

### Setup VPS

```bash
ssh root@your_server_ip

apt update && apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs
npm i -g pm2
```

### Deploy Application

```bash
git clone https://github.com/YOUR_USERNAME/rizky-ai.git
cd rizky-ai
npm install
pm2 start server.js --name "rizky-ai"
pm2 startup && pm2 save
```

### Setup Nginx + SSL

```bash
apt install nginx -y
apt install certbot python3-certbot-nginx -y
certbot --nginx -d your-domain.com
```

---

## 📊 Quick Comparison

| Platform | Cost | Setup Time | Ease | SSL | Custom Domain |
|----------|------|-----------|------|-----|--------------|
| Railway | Free* | 5 min | ⭐⭐⭐⭐⭐ | ✅ | ✅ |
| Render | Free* | 10 min | ⭐⭐⭐⭐ | ✅ | ✅ |
| Self-Hosted | $5-50/mo | 1+ hour | ⭐⭐ | ✅ | ✅ |

---

## 🎉 Deploy Summary

1. **Push ke GitHub**
   ```bash
   git push origin main
   ```

2. **Connect ke Railway/Render**
   - Select repository
   - Click deploy

3. **Get URL**
   - Visit production link
   - Test chat

4. **Custom Domain** (Optional)
   - Update DNS
   - Add domain di hosting dashboard

---

**Selamat! Aplikasi Rizky AI sudah live!** 🚀
