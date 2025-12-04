# AI Chat Setup Guide

The landing page includes a live demo of Combly's floating AI chat feature. To enable it, you need to configure AI provider API keys.

## Quick Setup

1. **Copy the environment file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Add your API keys** to `.env.local`:

### OpenAI (Recommended)
Get your API key from: https://platform.openai.com/api-keys

```env
NEXT_PUBLIC_OPENAI_API_KEY=sk-proj-...
```

### Anthropic Claude (Optional)
Get your API key from: https://console.anthropic.com/settings/keys

```env
NEXT_PUBLIC_ANTHROPIC_API_KEY=sk-ant-...
```

### Groq (Optional - Free & Fast)
Get your API key from: https://console.groq.com/keys

```env
NEXT_PUBLIC_GROQ_API_KEY=gsk_...
```

## Configuration

You can set the default AI provider and model:

```env
# Choose: openai, anthropic, or groq
NEXT_PUBLIC_DEFAULT_AI_PROVIDER=openai

# Model examples:
# OpenAI: gpt-4o, gpt-4o-mini, gpt-3.5-turbo
# Anthropic: claude-3-5-sonnet-20241022
# Groq: llama-3.3-70b-versatile
NEXT_PUBLIC_DEFAULT_AI_MODEL=gpt-4o-mini
```

## Testing the Chat

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000

3. Look for the floating chat icon in the bottom-right corner

4. Click to open and start chatting!

## Features

- **Multiple AI Providers**: Switch between OpenAI, Claude, and Groq
- **Model Selection**: Choose different models for each provider
- **Conversation Memory**: Chat history is preserved during your session
- **Beautiful UI**: Matches Combly's medical theme design

## Troubleshooting

### Chat not working?

1. Check your `.env.local` file exists and contains valid API keys
2. Restart the dev server after adding/changing keys
3. Check browser console for any error messages
4. Verify your API key is valid by testing it in the provider's playground

### API Key Issues

- **OpenAI**: Make sure you have credits on your account
- **Anthropic**: Ensure your API key has the correct permissions
- **Groq**: Free tier available, just sign up for an API key

## Security Note

⚠️ **Important**: Never commit `.env.local` to git. It contains sensitive API keys.

The `.env.local` file is already in `.gitignore` to prevent accidental commits.
