// Paleta de cores moderna e diversificada para gráficos
export const chartColors = {
  // Cores principais - tons vibrantes e modernos
  primary: [
    '#3B82F6', // Azul moderno
    '#10B981', // Verde esmeralda
    '#F59E0B', // Âmbar dourado
    '#EF4444', // Vermelho coral
    '#8B5CF6', // Roxo violeta
    '#06B6D4', // Ciano turquesa
    '#F97316', // Laranja vibrante
    '#84CC16', // Verde lima
  ],

  // Cores secundárias - tons mais suaves
  secondary: [
    '#6366F1', // Índigo
    '#14B8A6', // Teal
    '#F59E0B', // Amarelo dourado
    '#EC4899', // Rosa vibrante
    '#A855F7', // Roxo médio
    '#0EA5E9', // Azul céu
    '#FB7185', // Rosa coral
    '#22C55E', // Verde médio
  ],

  // Cores terciárias - tons neutros e elegantes
  tertiary: [
    '#64748B', // Cinza azulado
    '#059669', // Verde escuro
    '#D97706', // Laranja escuro
    '#DC2626', // Vermelho escuro
    '#7C3AED', // Roxo escuro
    '#0891B2', // Azul escuro
    '#EA580C', // Laranja queimado
    '#16A34A', // Verde escuro
  ],

  // Cores pastéis - para gráficos suaves
  pastel: [
    '#DBEAFE', // Azul pastel
    '#D1FAE5', // Verde pastel
    '#FEF3C7', // Amarelo pastel
    '#FEE2E2', // Rosa pastel
    '#EDE9FE', // Roxo pastel
    '#CFFAFE', // Ciano pastel
    '#FED7AA', // Laranja pastel
    '#ECFCCB', // Verde lima pastel
  ],

  // Cores gradientes - para efeitos visuais
  gradient: [
    ['#667EEA', '#764BA2'], // Azul para roxo
    ['#F093FB', '#F5576C'], // Rosa para vermelho
    ['#4FACFE', '#00F2FE'], // Azul para ciano
    ['#43E97B', '#38F9D7'], // Verde para turquesa
    ['#FA709A', '#FEE140'], // Rosa para amarelo
    ['#A8EDEA', '#FED6E3'], // Turquesa para rosa
    ['#FF9A9E', '#FECFEF'], // Rosa suave
    ['#FFECD2', '#FCB69F'], // Pêssego suave
  ],

  // Cores para categorias específicas
  categories: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    neutral: '#6B7280',
  },

  // Cores para status
  status: {
    online: '#10B981',
    offline: '#6B7280',
    pending: '#F59E0B',
    error: '#EF4444',
    active: '#3B82F6',
    inactive: '#9CA3AF',
  },

  // Cores para diferentes tipos de dados
  dataTypes: {
    revenue: '#10B981',
    expenses: '#EF4444',
    profit: '#3B82F6',
    users: '#8B5CF6',
    orders: '#F59E0B',
    products: '#06B6D4',
    sales: '#84CC16',
    returns: '#F97316',
  },

  // Paleta completa para gráficos (50 cores misturadas)
  full: [
    '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6',
    '#22C55E', '#1D4ED8', '#EC4899', '#06B6D4', '#6B7280',
    '#A855F7', '#059669', '#F97316', '#DC2626', '#0EA5E9',
    '#16A34A', '#7C3AED', '#FB7185', '#0284C7', '#4B5563',
    '#9333EA', '#047857', '#D97706', '#BE185D', '#0369A1',
    '#84CC16', '#6D28D9', '#DB2777', '#075985', '#374151',
    '#5B21B6', '#065F46', '#B45309', '#9D174D', '#0C4A6E',
    '#22C55E', '#4C1D95', '#EA580C', '#831843', '#1E40AF',
    '#7C2D12', '#064E3B', '#92400E', '#BE123C', '#1E3A8A',
    '#6B21A8', '#15803D', '#78350F', '#7F1D1D', '#0F766E',
    '#581C87', '#166534', '#B91C1C', '#991B1B', '#1F2937'
  ],

  // Cores para modo escuro
  dark: {
    primary: [
      '#60A5FA', // Azul claro
      '#34D399', // Verde claro
      '#FBBF24', // Amarelo claro
      '#F87171', // Vermelho claro
      '#A78BFA', // Roxo claro
      '#22D3EE', // Ciano claro
      '#FB923C', // Laranja claro
      '#A3E635', // Verde lima claro
    ],
    background: '#1F2937',
    surface: '#374151',
    text: '#F9FAFB',
    textSecondary: '#D1D5DB',
  },

  // Cores para modo claro
  light: {
    primary: [
      '#1D4ED8', // Azul escuro
      '#047857', // Verde escuro
      '#D97706', // Amarelo escuro
      '#DC2626', // Vermelho escuro
      '#7C2D12', // Roxo escuro
      '#0891B2', // Ciano escuro
      '#EA580C', // Laranja escuro
      '#65A30D', // Verde lima escuro
    ],
    background: '#FFFFFF',
    surface: '#F9FAFB',
    text: '#111827',
    textSecondary: '#6B7280',
  }
};

// Função utilitária para obter cores baseadas no índice
export const getChartColor = (index: number, palette: 'primary' | 'secondary' | 'tertiary' | 'pastel' | 'full' = 'primary'): string => {
  const colors = chartColors[palette];
  return colors[index % colors.length];
};

// Função para obter gradiente
export const getGradientColor = (index: number): string[] => {
  return chartColors.gradient[index % chartColors.gradient.length];
};

// Função para obter cor por categoria
export const getCategoryColor = (category: keyof typeof chartColors.categories): string => {
  return chartColors.categories[category];
};

// Função para obter cor por status
export const getStatusColor = (status: keyof typeof chartColors.status): string => {
  return chartColors.status[status];
};

// Função para obter cor por tipo de dado
export const getDataTypeColor = (dataType: keyof typeof chartColors.dataTypes): string => {
  return chartColors.dataTypes[dataType];
};

export default chartColors;
