export const COLORS = {
  primary: '#2563EB',
  primaryLight: '#60A5FA',
  secondary: '#8B5CF6',
  accent: '#22C55E',
  bg: '#F8FAFC',
  surface: '#FFFFFF',
  text: '#0F172A',
  textMuted: '#64748B',
  border: '#E2E8F0',
  danger: '#EF4444',
  warning: '#F59E0B'
};

export const GRADIENTS = {
  primary: ['#2563EB', '#8B5CF6'],
  accent: ['#22C55E', '#60A5FA'],
  card: ['#FFFFFF', '#F8FAFC'],
  success: ['#22C55E', '#10B981']
};

export const TYPOGRAPHY = {
  h1: { fontFamily: 'Poppins-Bold', fontSize: 28, lineHeight: 34 },
  h2: { fontFamily: 'Poppins-SemiBold', fontSize: 22, lineHeight: 28 },
  h3: { fontFamily: 'Poppins-Medium', fontSize: 18, lineHeight: 24 },
  body: { fontFamily: 'Poppins-Regular', fontSize: 15, lineHeight: 22 },
  caption: { fontFamily: 'Poppins-Regular', fontSize: 12, lineHeight: 16, color: '#64748B' }
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
};

export const SHADOW = {
  soft: { 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.05, 
    shadowRadius: 12, 
    elevation: 3 
  },
  strong: { 
    shadowColor: '#2563EB', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.15, 
    shadowRadius: 16, 
    elevation: 5 
  }
};