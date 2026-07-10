# 🚀 Deploy Rizky AI ke Vercel

Panduan lengkap untuk deploy website Rizky AI ke Vercel dengan serverless functions.

## ✨ Keunggulan Deploy di Vercel

- ✅ **Gratis** untuk personal/hobby projects
- ✅ **Automatic deployments** dari Git
- ✅ **Serverless functions** (no need untuk manage server)
- ✅ **SSL certificate** included
- ✅ **CDN global** untuk faster loading
- ✅ **Environment variables** support
- ✅ **Real-time logs** & monitoring
- ✅ **Custom domain** support

## 📋 Prerequisites

1. **GitHub/GitLab/Bitbucket Account** - untuk source control
2. **Vercel Account** - free di https://vercel.com
3. **Git** installed di computer

## 🎯 Step-by-Step Deployment

### Cara 1: Menggunakan Vercel CLI (Recommended)

#### 1. Install Vercel CLI
```bash
npm i -g vercel
```

#### 2. Login ke Vercel
```bash
vercel login
```
Ikuti instruksi di browser untuk authenticate.

#### 3. Deploy Project
```bash
# Di root folder project
vercel
```

Jawab pertanyaan yang muncul:
```
? Set up and deploy "~/rizky-ai"? [Y/n] Y
? Which scope do you want to deploy to? [Your-Name]
? Link to existing project? [y/N] N
? What's your project's name? rizky-ai
? In which directory is your code located? ./
? Want to modify these settings before deploying? [y/N] N
```

#### 4. Selesai! 🎉
```
✓ Production: https://rizky-ai.vercel.app [copied to clipboard]
```

---

### Cara 2: Connect GitHub Repository

#### 1. Push Project ke GitHub
```bash
git init
git add .
git commit -m "Initial commit: Rizky AI"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rizky-ai.git
git push -u origin main
```

#### 2. Login ke Vercel Website
- Kunjungi https://vercel.com
- Click "New Project"

#### 3. Import Project
- Click "Import Git Repository"
- Paste repository URL
- Click "Import"

#### 4. Configure Project
- Project name: `rizky-ai`
- Framework: `Other` (default)
- Root Directory: `./`
- Click "Deploy"

#### 5. Automatic Deployments
Setiap push ke GitHub akan automatically deploy ke Vercel!

---

### Cara 3: Drag & Drop (Simplest)

1. Buka https://vercel.com/new
2. Pilih "Other"
3. Drag & drop folder project ke halaman
4. Tunggu deploy selesai

---

## ⚙️ Konfigurasi Vercel

### Environment Variables (Jika Diperlukan)
```bash
# Di vercel.json atau Vercel dashboard
vercel env add API_KEY "your-api-key"
```

Atau melalui dashboard:
1. Settings → Environment Variables
2. Add new variable
3. Input key & value

### Custom Domain
1. Buka Project Settings
2. Click "Domains"
3. Add your domain (e.g., rizky-ai.com)
4. Follow DNS instructions

---

## 📝 File Structure untuk Vercel

```
rizky-ai/
├── api/                    # Serverless functions
│   ├── chat.js            # Chat endpoint
│   └── health.js          # Health check
├── public/                # Static files
│   └── (optional)
├── index.html             # Main HTML
├── style.css              # Styles
├── script.js              # Frontend JS
├── package.json           # Dependencies
├── vercel.json            # Vercel config
├── .gitignore             # Git ignore rules
└── README.md              # Documentation
```

---

## 🔍 Testing Deployment

### Test di Local Vercel Environment
```bash
vercel dev
```
Ini akan simulate production environment di local.

### Test Endpoints
```bash
# Chat endpoint
curl -X POST https://rizky-ai.vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Halo!"}'

# Health check
curl https://rizky-ai.vercel.app/api/health
```

---

## 📊 Monitor Deployments

### Via CLI
```bash
vercel list                    # List all deployments
vercel logs                    # See real-time logs
vercel remove [deployment-id]  # Remove deployment
```

### Via Dashboard
1. Buka https://vercel.com/dashboard
2. Click project "rizky-ai"
3. Tab "Deployments" untuk history
4. Tab "Analytics" untuk metrics

---

## 🐛 Troubleshooting

### Problem: "Cannot find module 'axios'"
**Solution:**
```bash
npm install
git add package-lock.json
git commit -m "Update dependencies"
git push
```

### Problem: "CORS errors"
**Solution:**
Pastikan `vercel.json` sudah benar dengan CORS headers.

### Problem: "DeepSeek API timeout"
**Solution:**
- Vercel free tier timeout: 60 detik
- Upgrade ke Pro jika perlu timeout lebih lama
- Atau optimize DeepSeek request

### Problem: "Deployment failed"
**Solution:**
1. Check logs: `vercel logs`
2. Ensure all dependencies di package.json
3. Ensure vercel.json syntax benar
4. Redeploy: `vercel --prod`

---

## 🔐 Security Best Practices

1. **Jangan commit API keys**
   ```
   # .gitignore
   .env
   .env.local
   ```

2. **Use Environment Variables**
   ```javascript
   // Vercel dashboard → Settings → Environment Variables
   const apiKey = process.env.DEEPSEEK_API_KEY;
   ```

3. **Rate Limiting** (untuk production)
   ```bash
   npm install express-rate-limit
   ```

4. **HTTPS Only** - Vercel automatically provides SSL

---

## 📈 Scaling Tips

### For Free Tier Users
- Max 5 serverless functions
- 60 second timeout per request
- 1,000 GB bandwidth/month
- Good for hobby/personal projects

### For Pro/Enterprise
- More functions & longer timeouts
- Priority support
- Custom domains & SSL
- Advanced analytics

### Optimize Performance
1. **Minimize API calls** - batch requests
2. **Cache responses** - untuk repeated queries
3. **Compress assets** - CSS/JS minification
4. **CDN** - Vercel's global CDN

---

## 🎓 Learning Resources

- **Vercel Docs**: https://vercel.com/docs
- **Serverless Functions**: https://vercel.com/docs/functions/serverless-functions
- **Environment Variables**: https://vercel.com/docs/projects/environment-variables

---

## ✅ Deployment Checklist

- [ ] Project pushed to GitHub
- [ ] vercel.json configured
- [ ] package.json has correct scripts
- [ ] .gitignore file exists
- [ ] No hardcoded API keys
- [ ] Environment variables set (if needed)
- [ ] Deployment successful on Vercel
- [ ] Test /api/chat endpoint
- [ ] Test /api/health endpoint
- [ ] Custom domain configured (optional)

---

## 🎉 Selesai!

Website Rizky AI sudah live di Vercel! 🚀

**URL Production:** `https://rizky-ai.vercel.app`

Setiap update ke GitHub akan automatically deploy ke Vercel.

**Happy deploying!** 💚
