export const MODELOS = [
  {
    id: 'ABC-123',
    nome: 'Geladeira Frost Free',
    codigo: 'DFN41',
    tipo: 'Refrigerador',
    marca: 'Electrolux',
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
  ,
  {
    id: 'ELX-001',
    nome: 'Refrigerador Frost Free Inox Top Freezer 431L',
    codigo: 'DF54X',
    tipo: 'Refrigerador',
    marca: 'Electrolux',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+ELX-001',
    especificacoes: {
      voltagem: '127V',
      consumo: '450W',
      dimensoes: { altura: '183cm', largura: '70cm', profundidade: '76cm' },
      peso: '90kg',
      capacidade: '431L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 2, max: 8 },
      freezer: { min: -18, max: -12 }
    },
    componentes: {
      compressor: 'Embraco FFI10HAK',
      ventilador: 'EBM-PAPST W2E150-AC43',
      termostato: 'Danfoss 077B68',
      condensador: 'Condensador Aletado 2500BTU',
      evaporador: 'Evaporador Placa 200L'
    },
    particularidades: ['Sistema Frost Free', 'Tecnologia Inverter']
  },
  {
    id: 'ELX-002',
    nome: 'Freezer Vertical Frost Free 240L Branco',
    codigo: 'FE27',
    tipo: 'Freezer',
    marca: 'Electrolux',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+ELX-002',
    especificacoes: {
      voltagem: '220V',
      consumo: '380W',
      dimensoes: { altura: '170cm', largura: '60cm', profundidade: '65cm' },
      peso: '65kg',
      capacidade: '240L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 0 },
      freezer: { min: -24, max: -16 }
    },
    componentes: {
      compressor: 'Embraco FFI85HAK',
      ventilador: 'Axial 12V',
      termostato: 'Eletromecânico',
      condensador: 'Serpentina Externa',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Sistema Frost Free', 'Porta Reversível']
  },
  {
    id: 'ELX-003',
    nome: 'Refrigerador Bottom Freezer Inox 579L',
    codigo: 'DB53X',
    tipo: 'Refrigerador',
    marca: 'Electrolux',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+ELX-003',
    especificacoes: {
      voltagem: '127V',
      consumo: '500W',
      dimensoes: { altura: '190cm', largura: '80cm', profundidade: '75cm' },
      peso: '105kg',
      capacidade: '579L',
      classeEnergetica: 'A+'
    },
    temperaturas: {
      refrigerador: { min: 1, max: 7 },
      freezer: { min: -20, max: -14 }
    },
    componentes: {
      compressor: 'Danfoss TL9FXA',
      ventilador: 'Radial 24V',
      termostato: 'Sensor Digital',
      condensador: 'Condensador Aletado 3000BTU',
      evaporador: 'Evaporador Bottom'
    },
    particularidades: ['Dispenser de Água e Gelo', 'Prateleiras retráteis']
  },
  {
    id: 'ELX-004',
    nome: 'Refrigerador 2 Portas Branco 310L',
    codigo: 'DC35A',
    tipo: 'Refrigerador',
    marca: 'Electrolux',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+ELX-004',
    especificacoes: {
      voltagem: '220V',
      consumo: '350W',
      dimensoes: { altura: '171cm', largura: '56cm', profundidade: '62cm' },
      peso: '60kg',
      capacidade: '310L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 3, max: 9 },
      freezer: { min: -15, max: -9 }
    },
    componentes: {
      compressor: 'Embraco FF8.5BK',
      ventilador: 'N/A',
      termostato: 'Termostato Analógico',
      condensador: 'Serpentina Interna',
      evaporador: 'Evaporador Placa Fria'
    },
    particularidades: ['Degelo Prático Cycle Defrost']
  },
  {
    id: 'ELX-005',
    nome: 'Side by Side Inox 504L',
    codigo: 'SS72X',
    tipo: 'Refrigerador',
    marca: 'Electrolux',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+ELX-005',
    especificacoes: {
      voltagem: '127V',
      consumo: '550W',
      dimensoes: { altura: '175cm', largura: '90cm', profundidade: '68cm' },
      peso: '115kg',
      capacidade: '504L',
      classeEnergetica: 'A+'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 6 },
      freezer: { min: -22, max: -16 }
    },
    componentes: {
      compressor: 'Tecumseh THS1380',
      ventilador: 'Duplo Axial',
      termostato: 'Painel Touch',
      condensador: 'Condensador Frio',
      evaporador: 'Evaporador Duplo'
    },
    particularidades: ['Sistema Ice Maker', 'Tecnologia Multi Flow']
  },
  {
    id: 'ELX-006',
    nome: 'Freezer Horizontal Dupla Ação 385L',
    codigo: 'H400',
    tipo: 'Freezer',
    marca: 'Electrolux',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+ELX-006',
    especificacoes: {
      voltagem: '220V',
      consumo: '420W',
      dimensoes: { altura: '90cm', largura: '130cm', profundidade: '70cm' },
      peso: '75kg',
      capacidade: '385L',
      classeEnergetica: 'B'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 8 },
      freezer: { min: -20, max: -10 }
    },
    componentes: {
      compressor: 'Embraco FFI10HAK',
      ventilador: 'N/A',
      termostato: 'Termostato Dupla Ação',
      condensador: 'Condensador Estático',
      evaporador: 'Evaporador Serpentina'
    },
    particularidades: ['Dupla Ação (Freezer e Refrigerador)']
  },
  {
    id: 'ELX-007',
    nome: 'Refrigerador Top Freezer 433L Preto',
    codigo: 'DF50X',
    tipo: 'Refrigerador',
    marca: 'Electrolux',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+ELX-007',
    especificacoes: {
      voltagem: '127V',
      consumo: '460W',
      dimensoes: { altura: '183cm', largura: '70cm', profundidade: '75cm' },
      peso: '92kg',
      capacidade: '433L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 1, max: 7 },
      freezer: { min: -19, max: -13 }
    },
    componentes: {
      compressor: 'Embraco FFI12HBX',
      ventilador: 'EBM-PAPST W2E200-HH38',
      termostato: 'Sensor Eletrônico',
      condensador: 'Condensador Aletado 2500BTU',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Painel Blue Touch', 'Dispenser de água']
  },
  {
    id: 'ELX-008',
    nome: 'Refrigerador 1 Porta 260L Cycle Defrost',
    codigo: 'RE31',
    tipo: 'Refrigerador',
    marca: 'Electrolux',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+ELX-008',
    especificacoes: {
      voltagem: '220V',
      consumo: '300W',
      dimensoes: { altura: '153cm', largura: '55cm', profundidade: '61cm' },
      peso: '55kg',
      capacidade: '260L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 4, max: 10 },
      freezer: { min: -12, max: -6 }
    },
    componentes: {
      compressor: 'Tecumseh AE1360Y',
      ventilador: 'N/A',
      termostato: 'Termostato Simples',
      condensador: 'Serpentina Interna',
      evaporador: 'Evaporador Placa'
    },
    particularidades: ['Design Compacto', 'Compartimento extra frio']
  },
  {
    id: 'ELX-009',
    nome: 'Freezer Horizontal 503L Tampa de Vidro',
    codigo: 'H550',
    tipo: 'Freezer',
    marca: 'Electrolux',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+ELX-009',
    especificacoes: {
      voltagem: '127V',
      consumo: '500W',
      dimensoes: { altura: '94cm', largura: '150cm', profundidade: '80cm' },
      peso: '95kg',
      capacidade: '503L',
      classeEnergetica: 'C'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 0 },
      freezer: { min: -25, max: -15 }
    },
    componentes: {
      compressor: 'Embraco NJ2212GK',
      ventilador: 'N/A',
      termostato: 'Termostato Comercial',
      condensador: 'Condensador Aletado Externo',
      evaporador: 'Evaporador Serpentina'
    },
    particularidades: ['Porta de Vidro Deslizante', 'Ideal para Comércio']
  },
  {
    id: 'ELX-010',
    nome: 'Refrigerador French Door 3 Portas 598L',
    codigo: 'DM85X',
    tipo: 'Refrigerador',
    marca: 'Electrolux',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+ELX-010',
    especificacoes: {
      voltagem: '220V',
      consumo: '600W',
      dimensoes: { altura: '190cm', largura: '90cm', profundidade: '75cm' },
      peso: '120kg',
      capacidade: '598L',
      classeEnergetica: 'A++'
    },
    temperaturas: {
      refrigerador: { min: 1, max: 5 },
      freezer: { min: -20, max: -16 }
    },
    componentes: {
      compressor: 'Inverter de Alta Eficiência',
      ventilador: 'Duplo Ventilador EC',
      termostato: 'Painel Eletrônico Digital',
      condensador: 'Condensador Otimizado',
      evaporador: 'Evaporador Twin Cooling'
    },
    particularidades: ['Sistema AutoSense', 'TasteGuard (Filtro de Carvão)']
  },
  {
    id: 'BTP-001',
    nome: 'Geladeira Frost Free Inverse 443L Inox',
    codigo: 'BRE57AK',
    tipo: 'Refrigerador',
    marca: 'Brastemp',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+BTP-001',
    especificacoes: {
      voltagem: '220V',
      consumo: '480W',
      dimensoes: { altura: '184cm', largura: '72cm', profundidade: '70cm' },
      peso: '95kg',
      capacidade: '443L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 2, max: 8 },
      freezer: { min: -18, max: -12 }
    },
    componentes: {
      compressor: 'Embraco FFI12HBX',
      ventilador: 'Ventilador Eletroeletrônico',
      termostato: 'Painel Eletrônico',
      condensador: 'Condensador Estático Interno',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Tecnologia Inverse (Freezer embaixo)', 'Smart Bar']
  },
  {
    id: 'BTP-002',
    nome: 'Refrigerador Frost Free Side Inverse 540L',
    codigo: 'BRO80AB',
    tipo: 'Refrigerador',
    marca: 'Brastemp',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+BTP-002',
    especificacoes: {
      voltagem: '127V',
      consumo: '550W',
      dimensoes: { altura: '190cm', largura: '85cm', profundidade: '74cm' },
      peso: '110kg',
      capacidade: '540L',
      classeEnergetica: 'A+'
    },
    temperaturas: {
      refrigerador: { min: 1, max: 7 },
      freezer: { min: -20, max: -14 }
    },
    componentes: {
      compressor: 'Inverter Embraco',
      ventilador: 'Duplo Flow',
      termostato: 'Sensor Touch',
      condensador: 'Condensador Ventilado',
      evaporador: 'Evaporador Duplo'
    },
    particularidades: ['Ice Maker', 'Função Turbo Freezer']
  },
  {
    id: 'BTP-003',
    nome: 'Freezer Vertical Frost Free 228L',
    codigo: 'BVR28HR',
    tipo: 'Freezer',
    marca: 'Brastemp',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+BTP-003',
    especificacoes: {
      voltagem: '220V',
      consumo: '390W',
      dimensoes: { altura: '169cm', largura: '61cm', profundidade: '69cm' },
      peso: '68kg',
      capacidade: '228L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 0 },
      freezer: { min: -24, max: -18 }
    },
    componentes: {
      compressor: 'Tecumseh THS1380',
      ventilador: 'Axial DC',
      termostato: 'Termostato Eletrônico',
      condensador: 'Condensador Frio',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Controle de Temperatura Externo']
  },
  {
    id: 'BTP-004',
    nome: 'Geladeira Top Freezer Frost Free 375L',
    codigo: 'BRM44HK',
    tipo: 'Refrigerador',
    marca: 'Brastemp',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+BTP-004',
    especificacoes: {
      voltagem: '127V',
      consumo: '420W',
      dimensoes: { altura: '175cm', largura: '62cm', profundidade: '71cm' },
      peso: '70kg',
      capacidade: '375L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 3, max: 9 },
      freezer: { min: -17, max: -11 }
    },
    componentes: {
      compressor: 'Embraco FFI10HAK',
      ventilador: 'Ventilador Simples',
      termostato: 'Termostato Mecânico',
      condensador: 'Serpentina Externa',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Compartimento Extra Frio']
  },
  {
    id: 'BTP-005',
    nome: 'Freezer Horizontal 228L',
    codigo: 'BHR33G',
    tipo: 'Freezer',
    marca: 'Brastemp',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+BTP-005',
    especificacoes: {
      voltagem: '220V',
      consumo: '350W',
      dimensoes: { altura: '85cm', largura: '90cm', profundidade: '70cm' },
      peso: '55kg',
      capacidade: '228L',
      classeEnergetica: 'B'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 0 },
      freezer: { min: -20, max: -10 }
    },
    componentes: {
      compressor: 'Tecumseh THB1340Y',
      ventilador: 'N/A',
      termostato: 'Termostato Ajustável',
      condensador: 'Condensador Estático',
      evaporador: 'Evaporador Serpentina'
    },
    particularidades: ['Rodízios para Movimentação']
  },
  {
    id: 'BTP-006',
    nome: 'Geladeira Top Freezer Cycle Defrost 340L',
    codigo: 'BRF36GB',
    tipo: 'Refrigerador',
    marca: 'Brastemp',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+BTP-006',
    especificacoes: {
      voltagem: '127V',
      consumo: '380W',
      dimensoes: { altura: '170cm', largura: '60cm', profundidade: '65cm' },
      peso: '65kg',
      capacidade: '340L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 4, max: 10 },
      freezer: { min: -15, max: -9 }
    },
    componentes: {
      compressor: 'Embraco FF8.5BK',
      ventilador: 'N/A',
      termostato: 'Termostato Analógico',
      condensador: 'Serpentina Interna',
      evaporador: 'Evaporador Placa Fria'
    },
    particularidades: ['Prateleiras de Vidro Temperado']
  },
  {
    id: 'BTP-007',
    nome: 'Refrigerador Side by Side Frost Free 603L',
    codigo: 'BRS80AR',
    tipo: 'Refrigerador',
    marca: 'Brastemp',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+BTP-007',
    especificacoes: {
      voltagem: '220V',
      consumo: '650W',
      dimensoes: { altura: '178cm', largura: '91cm', profundidade: '72cm' },
      peso: '125kg',
      capacidade: '603L',
      classeEnergetica: 'A+'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 6 },
      freezer: { min: -22, max: -16 }
    },
    componentes: {
      compressor: 'Inverter de Alta Capacidade',
      ventilador: 'Ventilador Duplo',
      termostato: 'Painel Eletrônico Digital',
      condensador: 'Condensador Ventilado',
      evaporador: 'Evaporador Twin Cooling'
    },
    particularidades: ['Dispenser de Água e Gelo na Porta']
  },
  {
    id: 'BTP-008',
    nome: 'Geladeira Top Freezer Frost Free 500L',
    codigo: 'BRM58AK',
    tipo: 'Refrigerador',
    marca: 'Brastemp',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+BTP-008',
    especificacoes: {
      voltagem: '127V',
      consumo: '500W',
      dimensoes: { altura: '187cm', largura: '75cm', profundidade: '73cm' },
      peso: '100kg',
      capacidade: '500L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 2, max: 8 },
      freezer: { min: -18, max: -12 }
    },
    componentes: {
      compressor: 'Embraco FFI14HBX',
      ventilador: 'Ventilador Multi Flow',
      termostato: 'Painel Eletrônico Touch',
      condensador: 'Condensador Otimizado',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Tecnologia Evox', 'Controle de Temperatura Smart']
  },
  {
    id: 'BTP-009',
    nome: 'Freezer Vertical Slim 142L',
    codigo: 'BVR16N',
    tipo: 'Freezer',
    marca: 'Brastemp',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+BTP-009',
    especificacoes: {
      voltagem: '220V',
      consumo: '300W',
      dimensoes: { altura: '140cm', largura: '50cm', profundidade: '60cm' },
      peso: '50kg',
      capacidade: '142L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 0 },
      freezer: { min: -24, max: -18 }
    },
    componentes: {
      compressor: 'Embraco FFI85HAK',
      ventilador: 'N/A',
      termostato: 'Termostato Eletrônico',
      condensador: 'Serpentina Externa',
      evaporador: 'Evaporador Placa'
    },
    particularidades: ['Tamanho Compacto', 'Porta Reversível']
  },
  {
    id: 'BTP-010',
    nome: 'Geladeira Top Freezer Duplex 400L',
    codigo: 'BRM50NB',
    tipo: 'Refrigerador',
    marca: 'Brastemp',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+BTP-010',
    especificacoes: {
      voltagem: '127V',
      consumo: '440W',
      dimensoes: { altura: '180cm', largura: '65cm', profundidade: '70cm' },
      peso: '80kg',
      capacidade: '400L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 3, max: 9 },
      freezer: { min: -16, max: -10 }
    },
    componentes: {
      compressor: 'Tecumseh THB1340Y',
      ventilador: 'Ventilador Simples',
      termostato: 'Termostato Eletrônico',
      condensador: 'Condensador Aletado',
      evaporador: 'Evaporador Placa Fria'
    },
    particularidades: ['Tecnologia All Cooling']
  }
]