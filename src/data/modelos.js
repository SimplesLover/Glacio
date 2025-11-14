export const MODELOS = [
  {
    id: 'ABC-123',
    nome: 'Geladeira Frost Free',
    codigo: 'DFN41',
    tipo: 'Refrigerador',
    marca: 'Eletrolux',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+ABC-123',
    especificacoes: {
      voltagem: '220V',
      consumo: '450W',
      dimensoes: { altura: '180cm', largura: '60cm', profundidade: '65cm' },
      peso: '85kg',
      capacidade: '380L',
      classeEnergetica: 'A+'
    },
    temperaturas: {
      refrigerador: { min: 2, max: 8 },
      freezer: { min: -18, max: -12 }
    },
    componentes: {
      compressor: 'Embraco FFI12HBX',
      ventilador: 'EBM-PAPST W2E200-HH38',
      termostato: 'Danfoss 077B6',
      condensador: 'Condensador Aletado 2000BTU',
      evaporador: 'Evaporador Placa 180L'
    },
    particularidades: ['Sistema Frost Free', 'Painel eletrônico']
  },
  {
    id: 'XYZ-789',
    nome: 'Freezer Horizontal',
    codigo: 'FH300',
    tipo: 'Freezer',
    marca: 'Brastemp',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+XYZ-789',
    especificacoes: {
      voltagem: '110V',
      consumo: '300W',
      dimensoes: { altura: '90cm', largura: '120cm', profundidade: '70cm' },
      peso: '65kg',
      capacidade: '300L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      freezer: { min: -24, max: -12 }
    },
    componentes: {
      compressor: 'Embraco NJ9232GK',
      ventilador: 'EBM-PAPST 8556N',
      termostato: 'Danfoss 077B7'
    },
    particularidades: ['Cesto interno removível']
  }
]