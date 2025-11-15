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
  ,
  {
    id: 'CSL-001',
    nome: 'Geladeira Consul Facilite Frost Free 340L',
    codigo: 'CRM39AB',
    tipo: 'Refrigerador',
    marca: 'Consul',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+CSL-001',
    especificacoes: {
      voltagem: '220V',
      consumo: '390W',
      dimensoes: { altura: '175cm', largura: '62cm', profundidade: '71cm' },
      peso: '65kg',
      capacidade: '340L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 3, max: 9 },
      freezer: { min: -17, max: -11 }
    },
    componentes: {
      compressor: 'Embraco FFI10HAK',
      ventilador: 'Ventilador Simples',
      termostato: 'Termostato Eletrônico',
      condensador: 'Condensador Interno',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Função Turbo Freezer', 'Filtro Antiodor']
  },
  {
    id: 'CSL-002',
    nome: 'Geladeira Consul Degelo Seco 300L',
    codigo: 'CRC30GB',
    tipo: 'Refrigerador',
    marca: 'Consul',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+CSL-002',
    especificacoes: {
      voltagem: '127V',
      consumo: '350W',
      dimensoes: { altura: '170cm', largura: '60cm', profundidade: '65cm' },
      peso: '60kg',
      capacidade: '300L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 4, max: 10 },
      freezer: { min: -15, max: -9 }
    },
    componentes: {
      compressor: 'Tecumseh THB1340Y',
      ventilador: 'N/A',
      termostato: 'Termostato Analógico',
      condensador: 'Serpentina Interna',
      evaporador: 'Evaporador Placa Fria'
    },
    particularidades: ['Degelo Seco (Cycle Defrost)']
  },
  {
    id: 'CSL-003',
    nome: 'Freezer Vertical Frost Free 220L',
    codigo: 'CVU20EB',
    tipo: 'Freezer',
    marca: 'Consul',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+CSL-003',
    especificacoes: {
      voltagem: '220V',
      consumo: '380W',
      dimensoes: { altura: '169cm', largura: '61cm', profundidade: '69cm' },
      peso: '65kg',
      capacidade: '220L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 0 },
      freezer: { min: -24, max: -18 }
    },
    componentes: {
      compressor: 'Embraco FFI85HAK',
      ventilador: 'Axial 12V',
      termostato: 'Termostato Eletrônico',
      condensador: 'Condensador Frio',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Gavetas Removíveis']
  },
  {
    id: 'CSL-004',
    nome: 'Freezer Horizontal 309L Dupla Ação',
    codigo: 'CHF30',
    tipo: 'Freezer',
    marca: 'Consul',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+CSL-004',
    especificacoes: {
      voltagem: '127V',
      consumo: '390W',
      dimensoes: { altura: '90cm', largura: '110cm', profundidade: '70cm' },
      peso: '65kg',
      capacidade: '309L',
      classeEnergetica: 'B'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 8 },
      freezer: { min: -20, max: -10 }
    },
    componentes: {
      compressor: 'Tecumseh AE1360Y',
      ventilador: 'N/A',
      termostato: 'Termostato Dupla Ação',
      condensador: 'Condensador Estático',
      evaporador: 'Evaporador Serpentina'
    },
    particularidades: ['Dupla Função (Freezer e Refrigerador)']
  },
  {
    id: 'CSL-005',
    nome: 'Geladeira Consul Prateleiras Flex 437L Inox',
    codigo: 'CRM55AK',
    tipo: 'Refrigerador',
    marca: 'Consul',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+CSL-005',
    especificacoes: {
      voltagem: '220V',
      consumo: '450W',
      dimensoes: { altura: '184cm', largura: '71cm', profundidade: '75cm' },
      peso: '85kg',
      capacidade: '437L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 2, max: 8 },
      freezer: { min: -18, max: -12 }
    },
    componentes: {
      compressor: 'Embraco FFI12HBX',
      ventilador: 'Ventilador Multi Flow',
      termostato: 'Painel Touch',
      condensador: 'Condensador Aletado',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Prateleiras Flexíveis (Alturas ajustáveis)']
  },
  {
    id: 'CSL-006',
    nome: 'Geladeira 1 Porta Cycle Defrost 280L',
    codigo: 'CRB36AB',
    tipo: 'Refrigerador',
    marca: 'Consul',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+CSL-006',
    especificacoes: {
      voltagem: '127V',
      consumo: '320W',
      dimensoes: { altura: '166cm', largura: '55cm', profundidade: '62cm' },
      peso: '58kg',
      capacidade: '280L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 4, max: 10 },
      freezer: { min: -12, max: -6 }
    },
    componentes: {
      compressor: 'Embraco FFI85HAK',
      ventilador: 'N/A',
      termostato: 'Termostato Simples',
      condensador: 'Serpentina Interna',
      evaporador: 'Evaporador Placa'
    },
    particularidades: ['Espaço Flex']
  },
  {
    id: 'CSL-007',
    nome: 'Refrigerador Top Freezer 451L Frost Free Inox',
    codigo: 'CRM54BK',
    tipo: 'Refrigerador',
    marca: 'Consul',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+CSL-007',
    especificacoes: {
      voltagem: '220V',
      consumo: '460W',
      dimensoes: { altura: '189cm', largura: '70cm', profundidade: '73cm' },
      peso: '88kg',
      capacidade: '451L',
      classeEnergetica: 'A+'
    },
    temperaturas: {
      refrigerador: { min: 1, max: 7 },
      freezer: { min: -19, max: -13 }
    },
    componentes: {
      compressor: 'Embraco FFI14HBX',
      ventilador: 'EBM-PAPST W2E200-HH38',
      termostato: 'Painel Eletrônico',
      condensador: 'Condensador Ventilado',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Função Super Frio']
  },
  {
    id: 'CSL-008',
    nome: 'Freezer Horizontal 425L Tampa Cega',
    codigo: 'CHF45',
    tipo: 'Freezer',
    marca: 'Consul',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+CSL-008',
    especificacoes: {
      voltagem: '127V',
      consumo: '480W',
      dimensoes: { altura: '94cm', largura: '140cm', profundidade: '75cm' },
      peso: '80kg',
      capacidade: '425L',
      classeEnergetica: 'C'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 0 },
      freezer: { min: -25, max: -15 }
    },
    componentes: {
      compressor: 'Tecumseh THS1380',
      ventilador: 'N/A',
      termostato: 'Termostato Comercial',
      condensador: 'Condensador Externo',
      evaporador: 'Evaporador Serpentina'
    },
    particularidades: ['Fechadura de Segurança']
  },
  {
    id: 'CSL-009',
    nome: 'Geladeira Consul Facilite 400L Inox',
    codigo: 'CRM44AK',
    tipo: 'Refrigerador',
    marca: 'Consul',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+CSL-009',
    especificacoes: {
      voltagem: '220V',
      consumo: '430W',
      dimensoes: { altura: '180cm', largura: '65cm', profundidade: '70cm' },
      peso: '75kg',
      capacidade: '400L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 3, max: 9 },
      freezer: { min: -16, max: -10 }
    },
    componentes: {
      compressor: 'Embraco FFI12HBX',
      ventilador: 'Ventilador Simples',
      termostato: 'Termostato Eletrônico',
      condensador: 'Condensador Aletado',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Espaço Flex no Freezer']
  },
  {
    id: 'CSL-010',
    nome: 'Geladeira Consul Facilite 386L Branca',
    codigo: 'CRM43NB',
    tipo: 'Refrigerador',
    marca: 'Consul',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+CSL-010',
    especificacoes: {
      voltagem: '127V',
      consumo: '410W',
      dimensoes: { altura: '178cm', largura: '62cm', profundidade: '71cm' },
      peso: '72kg',
      capacidade: '386L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 4, max: 10 },
      freezer: { min: -15, max: -9 }
    },
    componentes: {
      compressor: 'Embraco FFI10HAK',
      ventilador: 'Ventilador Simples',
      termostato: 'Termostato Mecânico',
      condensador: 'Condensador Interno',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Controle de Temperatura Externo']
  },
  {
    id: 'SMG-001',
    nome: 'Refrigerador French Door Twin Cooling Plus 536L',
    codigo: 'RF53DB',
    tipo: 'Refrigerador',
    marca: 'Samsung',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+SMG-001',
    especificacoes: {
      voltagem: '220V',
      consumo: '580W',
      dimensoes: { altura: '179cm', largura: '82cm', profundidade: '74cm' },
      peso: '108kg',
      capacidade: '536L',
      classeEnergetica: 'A++'
    },
    temperaturas: {
      refrigerador: { min: 1, max: 7 },
      freezer: { min: -20, max: -16 }
    },
    componentes: {
      compressor: 'Digital Inverter Samsung',
      ventilador: 'Twin Cooling Fan',
      termostato: 'Controle Eletrônico Digital',
      condensador: 'Condensador Otimizado',
      evaporador: 'Evaporador Duplo'
    },
    particularidades: ['Tecnologia Twin Cooling Plus', 'Dispenser de Água e Gelo']
  },
  {
    id: 'SMG-002',
    nome: 'Geladeira Bottom Mount Inverter 453L',
    codigo: 'RB40K',
    tipo: 'Refrigerador',
    marca: 'Samsung',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+SMG-002',
    especificacoes: {
      voltagem: '127V',
      consumo: '450W',
      dimensoes: { altura: '185cm', largura: '70cm', profundidade: '69cm' },
      peso: '85kg',
      capacidade: '453L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 2, max: 8 },
      freezer: { min: -18, max: -12 }
    },
    componentes: {
      compressor: 'Digital Inverter Samsung',
      ventilador: 'Ventilador Interno',
      termostato: 'Sensor Digital',
      condensador: 'Condensador Estático Interno',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Compressor Digital Inverter (10 anos de garantia)']
  },
  {
    id: 'SMG-003',
    nome: 'Refrigerador Side by Side Family Hub 602L',
    codigo: 'RS65R',
    tipo: 'Refrigerador',
    marca: 'Samsung',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+SMG-003',
    especificacoes: {
      voltagem: '220V',
      consumo: '680W',
      dimensoes: { altura: '178cm', largura: '91cm', profundidade: '73cm' },
      peso: '130kg',
      capacidade: '602L',
      classeEnergetica: 'A++'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 6 },
      freezer: { min: -22, max: -16 }
    },
    componentes: {
      compressor: 'Digital Inverter Premium',
      ventilador: 'Multi Flow Fan',
      termostato: 'Tela Touch Family Hub',
      condensador: 'Condensador Ventilado',
      evaporador: 'Evaporador All Around Cooling'
    },
    particularidades: ['Tela Touchscreen Family Hub', 'Visão Interna (View Inside)']
  },
  {
    id: 'SMG-004',
    nome: 'Geladeira Top Mount Inverter 385L',
    codigo: 'RT38K',
    tipo: 'Refrigerador',
    marca: 'Samsung',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+SMG-004',
    especificacoes: {
      voltagem: '127V',
      consumo: '420W',
      dimensoes: { altura: '178cm', largura: '67cm', profundidade: '67cm' },
      peso: '75kg',
      capacidade: '385L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 3, max: 9 },
      freezer: { min: -17, max: -11 }
    },
    componentes: {
      compressor: 'Digital Inverter Samsung',
      ventilador: 'Power Cool Fan',
      termostato: 'Controle Eletrônico',
      condensador: 'Condensador Interno',
      evaporador: 'Evaporador Twin Cooling'
    },
    particularidades: ['Tecnologia Power Cool/Freeze']
  },
  {
    id: 'SMG-005',
    nome: 'Freezer Vertical Convertível 320L (Convertible)',
    codigo: 'RZ32A',
    tipo: 'Freezer',
    marca: 'Samsung',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+SMG-005',
    especificacoes: {
      voltagem: '220V',
      consumo: '400W',
      dimensoes: { altura: '185cm', largura: '60cm', profundidade: '70cm' },
      peso: '70kg',
      capacidade: '320L',
      classeEnergetica: 'A+'
    },
    temperaturas: {
      refrigerador: { min: 2, max: 8 },
      freezer: { min: -24, max: -16 }
    },
    componentes: {
      compressor: 'Digital Inverter Samsung',
      ventilador: 'Ventilador Interno',
      termostato: 'Controle de Conversão',
      condensador: 'Condensador Frio',
      evaporador: 'Evaporador Multi Flow'
    },
    particularidades: ['Modo Freezer/Refrigerador Convertível']
  },
  {
    id: 'SMG-006',
    nome: 'Refrigerador Top Mount Twin Cooling 580L',
    codigo: 'RT58K',
    tipo: 'Refrigerador',
    marca: 'Samsung',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+SMG-006',
    especificacoes: {
      voltagem: '127V',
      consumo: '520W',
      dimensoes: { altura: '188cm', largura: '84cm', profundidade: '74cm' },
      peso: '100kg',
      capacidade: '580L',
      classeEnergetica: 'A+'
    },
    temperaturas: {
      refrigerador: { min: 1, max: 7 },
      freezer: { min: -20, max: -14 }
    },
    componentes: {
      compressor: 'Digital Inverter Samsung',
      ventilador: 'Twin Cooling Fan',
      termostato: 'Painel Eletrônico Touch',
      condensador: 'Condensador Otimizado',
      evaporador: 'Evaporador Duplo'
    },
    particularidades: ['Gaveta Moisture-Free Zone']
  },
  {
    id: 'SMG-007',
    nome: 'Side by Side Inverter 617L',
    codigo: 'RS65R3',
    tipo: 'Refrigerador',
    marca: 'Samsung',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+SMG-007',
    especificacoes: {
      voltagem: '220V',
      consumo: '620W',
      dimensoes: { altura: '179cm', largura: '91cm', profundidade: '74cm' },
      peso: '120kg',
      capacidade: '617L',
      classeEnergetica: 'A++'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 6 },
      freezer: { min: -22, max: -16 }
    },
    componentes: {
      compressor: 'Digital Inverter Premium',
      ventilador: 'Ventilador Duplo',
      termostato: 'Painel Digital Interno',
      condensador: 'Condensador Ventilado',
      evaporador: 'Evaporador All Around Cooling'
    },
    particularidades: ['Tecnologia No Frost', 'Iluminação LED']
  },
  {
    id: 'SMG-008',
    nome: 'Refrigerador 1 Porta Grande 400L Inverter',
    codigo: 'RR39T',
    tipo: 'Refrigerador',
    marca: 'Samsung',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+SMG-008',
    especificacoes: {
      voltagem: '127V',
      consumo: '400W',
      dimensoes: { altura: '185cm', largura: '59.5cm', profundidade: '64cm' },
      peso: '70kg',
      capacidade: '400L',
      classeEnergetica: 'A+'
    },
    temperaturas: {
      refrigerador: { min: 1, max: 7 },
      freezer: { min: -10, max: -5 }
    },
    componentes: {
      compressor: 'Digital Inverter Samsung',
      ventilador: 'Ventilador Simples',
      termostato: 'Controle Eletrônico',
      condensador: 'Condensador Interno',
      evaporador: 'Evaporador All Around Cooling'
    },
    particularidades: ['Design Modular e Integrável']
  },
  {
    id: 'SMG-009',
    nome: 'Freezer Vertical 1 Porta 300L Inverter',
    codigo: 'RZ32T',
    tipo: 'Freezer',
    marca: 'Samsung',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+SMG-009',
    especificacoes: {
      voltagem: '220V',
      consumo: '380W',
      dimensoes: { altura: '185cm', largura: '59.5cm', profundidade: '64cm' },
      peso: '68kg',
      capacidade: '300L',
      classeEnergetica: 'A+'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 0 },
      freezer: { min: -24, max: -18 }
    },
    componentes: {
      compressor: 'Digital Inverter Samsung',
      ventilador: 'Power Freeze Fan',
      termostato: 'Controle Eletrônico',
      condensador: 'Condensador Frio',
      evaporador: 'Evaporador Multi Flow'
    },
    particularidades: ['Pode ser combinado com RR39T']
  },
  {
    id: 'SMG-010',
    nome: 'Refrigerador Twin Cooling Plus 458L',
    codigo: 'RT46K',
    tipo: 'Refrigerador',
    marca: 'Samsung',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+SMG-010',
    especificacoes: {
      voltagem: '127V',
      consumo: '480W',
      dimensoes: { altura: '180cm', largura: '70cm', profundidade: '70cm' },
      peso: '80kg',
      capacidade: '458L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 2, max: 8 },
      freezer: { min: -18, max: -12 }
    },
    componentes: {
      compressor: 'Digital Inverter Samsung',
      ventilador: 'Twin Cooling Fan',
      termostato: 'Controle Eletrônico',
      condensador: 'Condensador Otimizado',
      evaporador: 'Evaporador Duplo'
    },
    particularidades: ['5 Modos de Conversão']
  }
  ,
  {
    id: 'LG-001',
    nome: 'Refrigerador Side by Side Inverter 611L',
    codigo: 'GC-L228',
    tipo: 'Refrigerador',
    marca: 'LG',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+LG-001',
    especificacoes: {
      voltagem: '220V',
      consumo: '650W',
      dimensoes: { altura: '179cm', largura: '91cm', profundidade: '73cm' },
      peso: '120kg',
      capacidade: '611L',
      classeEnergetica: 'A++'
    },
    temperaturas: {
      refrigerador: { min: 1, max: 7 },
      freezer: { min: -22, max: -16 }
    },
    componentes: {
      compressor: 'Linear Inverter LG',
      ventilador: 'Multi Air Flow Fan',
      termostato: 'Controle Digital Touch',
      condensador: 'Condensador Ventilado',
      evaporador: 'Evaporador Duplo'
    },
    particularidades: ['Compressor Linear Inverter', 'Dispenser de Água e Gelo']
  },
  {
    id: 'LG-002',
    nome: 'Geladeira Bottom Freezer Inox 474L',
    codigo: 'GC-B499',
    tipo: 'Refrigerador',
    marca: 'LG',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+LG-002',
    especificacoes: {
      voltagem: '127V',
      consumo: '500W',
      dimensoes: { altura: '185cm', largura: '70cm', profundidade: '70cm' },
      peso: '95kg',
      capacidade: '474L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 2, max: 8 },
      freezer: { min: -18, max: -12 }
    },
    componentes: {
      compressor: 'Linear Inverter LG',
      ventilador: 'Ventilador Simples',
      termostato: 'Sensor Digital',
      condensador: 'Condensador Estático',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Gaveta com Controle de Umidade']
  },
  {
    id: 'LG-003',
    nome: 'Refrigerador French Door InstaView 570L',
    codigo: 'GC-X247',
    tipo: 'Refrigerador',
    marca: 'LG',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+LG-003',
    especificacoes: {
      voltagem: '220V',
      consumo: '700W',
      dimensoes: { altura: '179cm', largura: '91cm', profundidade: '73cm' },
      peso: '135kg',
      capacidade: '570L',
      classeEnergetica: 'A++'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 6 },
      freezer: { min: -22, max: -16 }
    },
    componentes: {
      compressor: 'Linear Inverter Premium',
      ventilador: 'Door Cooling Fan',
      termostato: 'InstaView Door-in-Door',
      condensador: 'Condensador Otimizado',
      evaporador: 'Evaporador Dual Flow'
    },
    particularidades: ['InstaView Door-in-Door', 'Tecnologia Smart Diagnosis']
  },
  {
    id: 'LG-004',
    nome: 'Freezer Vertical No Frost 280L',
    codigo: 'GV-B280',
    tipo: 'Freezer',
    marca: 'LG',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+LG-004',
    especificacoes: {
      voltagem: '127V',
      consumo: '390W',
      dimensoes: { altura: '169cm', largura: '61cm', profundidade: '69cm' },
      peso: '70kg',
      capacidade: '280L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 0 },
      freezer: { min: -24, max: -18 }
    },
    componentes: {
      compressor: 'Standard Embraco',
      ventilador: 'Axial DC',
      termostato: 'Termostato Eletrônico',
      condensador: 'Condensador Frio',
      evaporador: 'Evaporador No Frost'
    },
    particularidades: ['Sistema Total No Frost']
  },
  {
    id: 'LG-005',
    nome: 'Refrigerador Top Mount Inverter 438L',
    codigo: 'GT-B438',
    tipo: 'Refrigerador',
    marca: 'LG',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+LG-005',
    especificacoes: {
      voltagem: '220V',
      consumo: '480W',
      dimensoes: { altura: '178cm', largura: '70cm', profundidade: '73cm' },
      peso: '85kg',
      capacidade: '438L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 2, max: 8 },
      freezer: { min: -18, max: -12 }
    },
    componentes: {
      compressor: 'Linear Inverter LG',
      ventilador: 'Multi Air Flow Fan',
      termostato: 'Painel Eletrônico',
      condensador: 'Condensador Otimizado',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Door Cooling+']
  },
  {
    id: 'LG-006',
    nome: 'Refrigerador Bottom Freezer 384L Black Glass',
    codigo: 'GC-B404',
    tipo: 'Refrigerador',
    marca: 'LG',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+LG-006',
    especificacoes: {
      voltagem: '127V',
      consumo: '420W',
      dimensoes: { altura: '186cm', largura: '59.5cm', profundidade: '68cm' },
      peso: '75kg',
      capacidade: '384L',
      classeEnergetica: 'A+'
    },
    temperaturas: {
      refrigerador: { min: 1, max: 7 },
      freezer: { min: -20, max: -14 }
    },
    componentes: {
      compressor: 'Linear Inverter LG',
      ventilador: 'Multi Air Flow Fan',
      termostato: 'Controle Interno Digital',
      condensador: 'Condensador Interno',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Acabamento Black Glass']
  },
  {
    id: 'LG-007',
    nome: 'Refrigerador Top Mount No Frost 374L',
    codigo: 'GT-B374',
    tipo: 'Refrigerador',
    marca: 'LG',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+LG-007',
    especificacoes: {
      voltagem: '220V',
      consumo: '400W',
      dimensoes: { altura: '173cm', largura: '68cm', profundidade: '65cm' },
      peso: '70kg',
      capacidade: '374L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 3, max: 9 },
      freezer: { min: -17, max: -11 }
    },
    componentes: {
      compressor: 'Standard Embraco',
      ventilador: 'Ventilador Simples',
      termostato: 'Termostato Mecânico',
      condensador: 'Condensador Estático',
      evaporador: 'Evaporador No Frost'
    },
    particularidades: ['Prateleiras de Vidro Resistente']
  },
  {
    id: 'LG-008',
    nome: 'Refrigerador French Door 3 Portas 480L',
    codigo: 'GC-J480',
    tipo: 'Refrigerador',
    marca: 'LG',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+LG-008',
    especificacoes: {
      voltagem: '127V',
      consumo: '550W',
      dimensoes: { altura: '175cm', largura: '80cm', profundidade: '72cm' },
      peso: '100kg',
      capacidade: '480L',
      classeEnergetica: 'A+'
    },
    temperaturas: {
      refrigerador: { min: 1, max: 7 },
      freezer: { min: -20, max: -14 }
    },
    componentes: {
      compressor: 'Linear Inverter LG',
      ventilador: 'Door Cooling Fan',
      termostato: 'Painel Eletrônico',
      condensador: 'Condensador Otimizado',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Smart Storage System']
  },
  {
    id: 'LG-009',
    nome: 'Freezer Horizontal 2 Portas 500L',
    codigo: 'GR-H500',
    tipo: 'Freezer',
    marca: 'LG',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+LG-009',
    especificacoes: {
      voltagem: '220V',
      consumo: '520W',
      dimensoes: { altura: '94cm', largura: '150cm', profundidade: '80cm' },
      peso: '90kg',
      capacidade: '500L',
      classeEnergetica: 'C'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 0 },
      freezer: { min: -25, max: -15 }
    },
    componentes: {
      compressor: 'Compressor Convencional',
      ventilador: 'N/A',
      termostato: 'Termostato Comercial',
      condensador: 'Condensador Externo',
      evaporador: 'Evaporador Serpentina'
    },
    particularidades: ['Duas Portas Independentes']
  },
  {
    id: 'LG-010',
    nome: 'Refrigerador Mini Bar/Frigobar 120L',
    codigo: 'GR-131',
    tipo: 'Refrigerador',
    marca: 'LG',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+LG-010',
    especificacoes: {
      voltagem: '127V',
      consumo: '180W',
      dimensoes: { altura: '85cm', largura: '50cm', profundidade: '55cm' },
      peso: '25kg',
      capacidade: '120L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 4, max: 10 },
      freezer: { min: -6, max: -2 }
    },
    componentes: {
      compressor: 'Mini Compressor Standard',
      ventilador: 'N/A',
      termostato: 'Termostato Analógico',
      condensador: 'Serpentina Interna',
      evaporador: 'Evaporador Placa'
    },
    particularidades: ['Tamanho Compacto']
  },
  {
    id: 'MDA-001',
    nome: 'Refrigerador Side by Side Inverter 528L',
    codigo: 'MD-RS530',
    tipo: 'Refrigerador',
    marca: 'Midea',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+MDA-001',
    especificacoes: {
      voltagem: '220V',
      consumo: '550W',
      dimensoes: { altura: '178cm', largura: '90cm', profundidade: '66cm' },
      peso: '105kg',
      capacidade: '528L',
      classeEnergetica: 'A+'
    },
    temperaturas: {
      refrigerador: { min: 1, max: 7 },
      freezer: { min: -20, max: -14 }
    },
    componentes: {
      compressor: 'Compressor Inverter Midea',
      ventilador: 'Multi Air Flow Fan',
      termostato: 'Controle Eletrônico Externo',
      condensador: 'Condensador Ventilado',
      evaporador: 'Evaporador No Frost'
    },
    particularidades: ['Painel Touchscreen', 'Dispenser de Água']
  },
  {
    id: 'MDA-002',
    nome: 'Geladeira Bottom Freezer Inverter 435L',
    codigo: 'MD-RB435',
    tipo: 'Refrigerador',
    marca: 'Midea',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+MDA-002',
    especificacoes: {
      voltagem: '127V',
      consumo: '450W',
      dimensoes: { altura: '185cm', largura: '70cm', profundidade: '70cm' },
      peso: '88kg',
      capacidade: '435L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 2, max: 8 },
      freezer: { min: -18, max: -12 }
    },
    componentes: {
      compressor: 'Compressor Inverter Midea',
      ventilador: 'Ventilador Interno',
      termostato: 'Sensor Digital',
      condensador: 'Condensador Estático',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Freezer com gavetas deslizantes']
  },
  {
    id: 'MDA-003',
    nome: 'Freezer Vertical Frost Free 250L',
    codigo: 'MD-FV250',
    tipo: 'Freezer',
    marca: 'Midea',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+MDA-003',
    especificacoes: {
      voltagem: '220V',
      consumo: '380W',
      dimensoes: { altura: '170cm', largura: '60cm', profundidade: '65cm' },
      peso: '65kg',
      capacidade: '250L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 0 },
      freezer: { min: -24, max: -18 }
    },
    componentes: {
      compressor: 'Compressor Standard',
      ventilador: 'Axial 12V',
      termostato: 'Termostato Eletrônico',
      condensador: 'Condensador Frio',
      evaporador: 'Evaporador No Frost'
    },
    particularidades: ['Controle de Temperatura na Porta']
  },
  {
    id: 'MDA-004',
    nome: 'Freezer Horizontal 199L Porta Sólida',
    codigo: 'MD-FH200',
    tipo: 'Freezer',
    marca: 'Midea',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+MDA-004',
    especificacoes: {
      voltagem: '127V',
      consumo: '320W',
      dimensoes: { altura: '85cm', largura: '90cm', profundidade: '60cm' },
      peso: '45kg',
      capacidade: '199L',
      classeEnergetica: 'B'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 0 },
      freezer: { min: -20, max: -10 }
    },
    componentes: {
      compressor: 'Tecumseh THB1340Y',
      ventilador: 'N/A',
      termostato: 'Termostato Mecânico',
      condensador: 'Condensador Estático',
      evaporador: 'Evaporador Serpentina'
    },
    particularidades: ['Função Resfriar (Geladeira)']
  },
  {
    id: 'MDA-005',
    nome: 'Refrigerador Top Mount Frost Free 415L',
    codigo: 'MD-RF415',
    tipo: 'Refrigerador',
    marca: 'Midea',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+MDA-005',
    especificacoes: {
      voltagem: '220V',
      consumo: '440W',
      dimensoes: { altura: '178cm', largura: '67cm', profundidade: '67cm' },
      peso: '75kg',
      capacidade: '415L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 3, max: 9 },
      freezer: { min: -17, max: -11 }
    },
    componentes: {
      compressor: 'Compressor Standard',
      ventilador: 'Ventilador Simples',
      termostato: 'Painel Eletrônico',
      condensador: 'Condensador Interno',
      evaporador: 'Evaporador Multi Flow'
    },
    particularidades: ['Iluminação LED']
  },
  {
    id: 'MDA-006',
    nome: 'Refrigerador 1 Porta 310L Frost Free',
    codigo: 'MD-R310',
    tipo: 'Refrigerador',
    marca: 'Midea',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+MDA-006',
    especificacoes: {
      voltagem: '127V',
      consumo: '380W',
      dimensoes: { altura: '170cm', largura: '60cm', profundidade: '65cm' },
      peso: '65kg',
      capacidade: '310L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 3, max: 9 },
      freezer: { min: -16, max: -10 }
    },
    componentes: {
      compressor: 'Embraco FFI10HAK',
      ventilador: 'Ventilador Interno',
      termostato: 'Termostato Eletrônico',
      condensador: 'Condensador Aletado',
      evaporador: 'Evaporador No Frost'
    },
    particularidades: ['Design Clean']
  },
  {
    id: 'MDA-007',
    nome: 'Freezer Horizontal Dupla Ação 499L',
    codigo: 'MD-FH500',
    tipo: 'Freezer',
    marca: 'Midea',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+MDA-007',
    especificacoes: {
      voltagem: '220V',
      consumo: '500W',
      dimensoes: { altura: '94cm', largura: '150cm', profundidade: '80cm' },
      peso: '95kg',
      capacidade: '499L',
      classeEnergetica: 'C'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 8 },
      freezer: { min: -20, max: -10 }
    },
    componentes: {
      compressor: 'Compressor de Alta Capacidade',
      ventilador: 'N/A',
      termostato: 'Termostato Dupla Ação',
      condensador: 'Condensador Externo',
      evaporador: 'Evaporador Serpentina'
    },
    particularidades: ['Alta Capacidade de Armazenamento']
  },
  {
    id: 'MDA-008',
    nome: 'Refrigerador Side by Side Porta de Vidro 580L',
    codigo: 'MD-RS580VG',
    tipo: 'Refrigerador',
    marca: 'Midea',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+MDA-008',
    especificacoes: {
      voltagem: '127V',
      consumo: '600W',
      dimensoes: { altura: '180cm', largura: '90cm', profundidade: '70cm' },
      peso: '115kg',
      capacidade: '580L',
      classeEnergetica: 'A+'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 6 },
      freezer: { min: -22, max: -16 }
    },
    componentes: {
      compressor: 'Compressor Inverter Premium',
      ventilador: 'Ventilador Duplo',
      termostato: 'Painel Eletrônico Digital',
      condensador: 'Condensador Ventilado',
      evaporador: 'Evaporador Total No Frost'
    },
    particularidades: ['Acabamento em Vidro']
  },
  {
    id: 'MDA-009',
    nome: 'Geladeira Top Freezer Cycle Defrost 340L',
    codigo: 'MD-R340',
    tipo: 'Refrigerador',
    marca: 'Midea',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+MDA-009',
    especificacoes: {
      voltagem: '220V',
      consumo: '390W',
      dimensoes: { altura: '175cm', largura: '62cm', profundidade: '71cm' },
      peso: '68kg',
      capacidade: '340L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 4, max: 10 },
      freezer: { min: -15, max: -9 }
    },
    componentes: {
      compressor: 'Tecumseh THB1340Y',
      ventilador: 'N/A',
      termostato: 'Termostato Analógico',
      condensador: 'Serpentina Interna',
      evaporador: 'Evaporador Placa Fria'
    },
    particularidades: ['Degelo Prático']
  },
  {
    id: 'MDA-010',
    nome: 'Freezer Vertical 140L Slim',
    codigo: 'MD-FV140',
    tipo: 'Freezer',
    marca: 'Midea',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+MDA-010',
    especificacoes: {
      voltagem: '127V',
      consumo: '300W',
      dimensoes: { altura: '140cm', largura: '50cm', profundidade: '60cm' },
      peso: '50kg',
      capacidade: '140L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 0 },
      freezer: { min: -24, max: -18 }
    },
    componentes: {
      compressor: 'Mini Compressor Standard',
      ventilador: 'N/A',
      termostato: 'Termostato Eletrônico',
      condensador: 'Serpentina Externa',
      evaporador: 'Evaporador Placa'
    },
    particularidades: ['Ideal para Espaços Pequenos']
  }
  ,
  {
    id: 'PHC-001',
    nome: 'Refrigerador French Door Eco Inverter 482L',
    codigo: 'PRF500I',
    tipo: 'Refrigerador',
    marca: 'Philco',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+PHC-001',
    especificacoes: {
      voltagem: '220V',
      consumo: '520W',
      dimensoes: { altura: '185cm', largura: '83cm', profundidade: '70cm' },
      peso: '98kg',
      capacidade: '482L',
      classeEnergetica: 'A+'
    },
    temperaturas: {
      refrigerador: { min: 1, max: 7 },
      freezer: { min: -20, max: -14 }
    },
    componentes: {
      compressor: 'Compressor Eco Inverter Philco',
      ventilador: 'Multi Flow Fan',
      termostato: 'Painel Eletrônico Digital',
      condensador: 'Condensador Otimizado',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Tecnologia Eco Inverter', 'Função Smart Cooling']
  },
  {
    id: 'PHC-002',
    nome: 'Geladeira Top Freezer Retrô 300L Vermelha',
    codigo: 'PRD300R',
    tipo: 'Refrigerador',
    marca: 'Philco',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+PHC-002',
    especificacoes: {
      voltagem: '127V',
      consumo: '350W',
      dimensoes: { altura: '170cm', largura: '60cm', profundidade: '65cm' },
      peso: '60kg',
      capacidade: '300L',
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
    particularidades: ['Design Retrô']
  },
  {
    id: 'PHC-003',
    nome: 'Freezer Vertical Frost Free 260L Inox',
    codigo: 'PFV260I',
    tipo: 'Freezer',
    marca: 'Philco',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+PHC-003',
    especificacoes: {
      voltagem: '220V',
      consumo: '390W',
      dimensoes: { altura: '170cm', largura: '60cm', profundidade: '65cm' },
      peso: '68kg',
      capacidade: '260L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 0 },
      freezer: { min: -24, max: -18 }
    },
    componentes: {
      compressor: 'Embraco FFI10HAK',
      ventilador: 'Axial DC',
      termostato: 'Termostato Eletrônico',
      condensador: 'Condensador Frio',
      evaporador: 'Evaporador No Frost'
    },
    particularidades: ['Função Congelamento Rápido']
  },
  {
    id: 'PHC-004',
    nome: 'Refrigerador Side by Side 500L Preto',
    codigo: 'PRS500P',
    tipo: 'Refrigerador',
    marca: 'Philco',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+PHC-004',
    especificacoes: {
      voltagem: '127V',
      consumo: '550W',
      dimensoes: { altura: '175cm', largura: '90cm', profundidade: '68cm' },
      peso: '110kg',
      capacidade: '500L',
      classeEnergetica: 'A+'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 6 },
      freezer: { min: -22, max: -16 }
    },
    componentes: {
      compressor: 'Tecumseh THS1380',
      ventilador: 'Duplo Axial',
      termostato: 'Painel Touchscreen',
      condensador: 'Condensador Ventilado',
      evaporador: 'Evaporador Multi Air Flow'
    },
    particularidades: ['Acabamento em Aço Black']
  },
  {
    id: 'PHC-005',
    nome: 'Freezer Horizontal 145L',
    codigo: 'PFH150',
    tipo: 'Freezer',
    marca: 'Philco',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+PHC-005',
    especificacoes: {
      voltagem: '220V',
      consumo: '280W',
      dimensoes: { altura: '85cm', largura: '70cm', profundidade: '55cm' },
      peso: '35kg',
      capacidade: '145L',
      classeEnergetica: 'B'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 0 },
      freezer: { min: -20, max: -10 }
    },
    componentes: {
      compressor: 'Mini Compressor Standard',
      ventilador: 'N/A',
      termostato: 'Termostato Ajustável',
      condensador: 'Condensador Estático',
      evaporador: 'Evaporador Serpentina'
    },
    particularidades: ['Rodízios para Locomoção']
  },
  {
    id: 'PHC-006',
    nome: 'Refrigerador Top Freezer 340L Branco',
    codigo: 'PRF340B',
    tipo: 'Refrigerador',
    marca: 'Philco',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+PHC-006',
    especificacoes: {
      voltagem: '127V',
      consumo: '390W',
      dimensoes: { altura: '175cm', largura: '62cm', profundidade: '71cm' },
      peso: '65kg',
      capacidade: '340L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 3, max: 9 },
      freezer: { min: -17, max: -11 }
    },
    componentes: {
      compressor: 'Embraco FFI10HAK',
      ventilador: 'Ventilador Simples',
      termostato: 'Termostato Eletrônico',
      condensador: 'Condensador Interno',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Sistema de Iluminação LED']
  },
  {
    id: 'PHC-007',
    nome: 'Freezer Horizontal Dupla Ação 400L',
    codigo: 'PFH400DA',
    tipo: 'Freezer',
    marca: 'Philco',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+PHC-007',
    especificacoes: {
      voltagem: '220V',
      consumo: '450W',
      dimensoes: { altura: '90cm', largura: '130cm', profundidade: '70cm' },
      peso: '78kg',
      capacidade: '400L',
      classeEnergetica: 'B'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 8 },
      freezer: { min: -20, max: -10 }
    },
    componentes: {
      compressor: 'Tecumseh THS1380',
      ventilador: 'N/A',
      termostato: 'Termostato Dupla Ação',
      condensador: 'Condensador Estático',
      evaporador: 'Evaporador Serpentina'
    },
    particularidades: ['Pode ser usado como Geladeira ou Freezer']
  },
  {
    id: 'PHC-008',
    nome: 'Refrigerador Inverse Inverter 450L',
    codigo: 'PRI450I',
    tipo: 'Refrigerador',
    marca: 'Philco',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+PHC-008',
    especificacoes: {
      voltagem: '127V',
      consumo: '480W',
      dimensoes: { altura: '184cm', largura: '70cm', profundidade: '70cm' },
      peso: '90kg',
      capacidade: '450L',
      classeEnergetica: 'A+'
    },
    temperaturas: {
      refrigerador: { min: 2, max: 8 },
      freezer: { min: -18, max: -12 }
    },
    componentes: {
      compressor: 'Compressor Eco Inverter Philco',
      ventilador: 'Ventilador Interno',
      termostato: 'Painel Eletrônico',
      condensador: 'Condensador Interno',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Design Inverse (Freezer embaixo)']
  },
  {
    id: 'PHC-009',
    nome: 'Freezer Vertical Degelo Manual 160L',
    codigo: 'PFV160M',
    tipo: 'Freezer',
    marca: 'Philco',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+PHC-009',
    especificacoes: {
      voltagem: '220V',
      consumo: '300W',
      dimensoes: { altura: '140cm', largura: '50cm', profundidade: '60cm' },
      peso: '55kg',
      capacidade: '160L',
      classeEnergetica: 'B'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 0 },
      freezer: { min: -20, max: -10 }
    },
    componentes: {
      compressor: 'Standard Embraco',
      ventilador: 'N/A',
      termostato: 'Termostato Mecânico',
      condensador: 'Serpentina Externa',
      evaporador: 'Evaporador Placa'
    },
    particularidades: ['Degelo Manual']
  },
  {
    id: 'PHC-010',
    nome: 'Refrigerador Top Freezer 430L Inox',
    codigo: 'PRF430IX',
    tipo: 'Refrigerador',
    marca: 'Philco',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+PHC-010',
    especificacoes: {
      voltagem: '127V',
      consumo: '450W',
      dimensoes: { altura: '180cm', largura: '68cm', profundidade: '73cm' },
      peso: '80kg',
      capacidade: '430L',
      classeEnergetica: 'A'
    },
    temperaturas: {
      refrigerador: { min: 2, max: 8 },
      freezer: { min: -18, max: -12 }
    },
    componentes: {
      compressor: 'Compressor Standard',
      ventilador: 'Ventilador Multi Flow',
      termostato: 'Painel Eletrônico',
      condensador: 'Condensador Aletado',
      evaporador: 'Evaporador Frost Free'
    },
    particularidades: ['Acabamento em Inox']
  },
  {
    id: 'MTR-001',
    nome: 'Cervejeira Expositora Vertical 324L',
    codigo: 'VN28C',
    tipo: 'Refrigerador',
    marca: 'Metalfrio',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+MTR-001',
    especificacoes: {
      voltagem: '220V',
      consumo: '480W',
      dimensoes: { altura: '190cm', largura: '60cm', profundidade: '65cm' },
      peso: '90kg',
      capacidade: '324L',
      classeEnergetica: 'C'
    },
    temperaturas: {
      refrigerador: { min: -6, max: 2 },
      freezer: { min: 0, max: 0 }
    },
    componentes: {
      compressor: 'Embraco NEK2134GK',
      ventilador: 'Ventilador Evaporador Duplo',
      termostato: 'Controlador Eletrônico Digital',
      condensador: 'Condensador Aletado',
      evaporador: 'Evaporador Forçado'
    },
    particularidades: ['Ideal para Bebidas (Cerveja)', 'Porta de Vidro Antiembaçante']
  },
  {
    id: 'MTR-002',
    nome: 'Freezer Horizontal Dupla Ação 419L',
    codigo: 'HF40',
    tipo: 'Freezer',
    marca: 'Metalfrio',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+MTR-002',
    especificacoes: {
      voltagem: '127V',
      consumo: '450W',
      dimensoes: { altura: '94cm', largura: '130cm', profundidade: '70cm' },
      peso: '75kg',
      capacidade: '419L',
      classeEnergetica: 'C'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 8 },
      freezer: { min: -20, max: -10 }
    },
    componentes: {
      compressor: 'Tecumseh THS1380',
      ventilador: 'N/A',
      termostato: 'Termostato Dupla Ação',
      condensador: 'Condensador Estático',
      evaporador: 'Evaporador Serpentina'
    },
    particularidades: ['Tampa Sólida']
  },
  {
    id: 'MTR-003',
    nome: 'Expositor Vertical de Bebidas 570L',
    codigo: 'VB55',
    tipo: 'Refrigerador',
    marca: 'Metalfrio',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+MTR-003',
    especificacoes: {
      voltagem: '220V',
      consumo: '600W',
      dimensoes: { altura: '205cm', largura: '75cm', profundidade: '75cm' },
      peso: '120kg',
      capacidade: '570L',
      classeEnergetica: 'D'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 7 },
      freezer: { min: 0, max: 0 }
    },
    componentes: {
      compressor: 'Embraco NEU2170U',
      ventilador: 'Ventilador de Alta Vazão',
      termostato: 'Controlador Eletrônico',
      condensador: 'Condensador Ventilado',
      evaporador: 'Evaporador Forçado'
    },
    particularidades: ['Iluminação LED interna']
  },
  {
    id: 'MTR-004',
    nome: 'Freezer Vertical Porta de Vidro 520L',
    codigo: 'VF55',
    tipo: 'Freezer',
    marca: 'Metalfrio',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+MTR-004',
    especificacoes: {
      voltagem: '127V',
      consumo: '550W',
      dimensoes: { altura: '205cm', largura: '75cm', profundidade: '75cm' },
      peso: '110kg',
      capacidade: '520L',
      classeEnergetica: 'D'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 0 },
      freezer: { min: -24, max: -18 }
    },
    componentes: {
      compressor: 'Compressor de Alta Capacidade',
      ventilador: 'Ventilador Evaporador',
      termostato: 'Controlador Digital',
      condensador: 'Condensador Aletado',
      evaporador: 'Evaporador Forçado'
    },
    particularidades: ['Ideal para Congelados', 'Porta de Vidro Aquecida']
  },
  {
    id: 'MTR-005',
    nome: 'Freezer Horizontal 2 Portas 535L',
    codigo: 'HF55',
    tipo: 'Freezer',
    marca: 'Metalfrio',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+MTR-005',
    especificacoes: {
      voltagem: '220V',
      consumo: '520W',
      dimensoes: { altura: '94cm', largura: '150cm', profundidade: '80cm' },
      peso: '95kg',
      capacidade: '535L',
      classeEnergetica: 'C'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 0 },
      freezer: { min: -25, max: -15 }
    },
    componentes: {
      compressor: 'Embraco NEK2134GK',
      ventilador: 'N/A',
      termostato: 'Termostato Comercial',
      condensador: 'Condensador Estático',
      evaporador: 'Evaporador Serpentina'
    },
    particularidades: ['Dupla Tampa Sólida']
  },
  {
    id: 'MTR-006',
    nome: 'Expositor Vertical de Laticínios 400L',
    codigo: 'VB40L',
    tipo: 'Refrigerador',
    marca: 'Metalfrio',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+MTR-006',
    especificacoes: {
      voltagem: '127V',
      consumo: '500W',
      dimensoes: { altura: '190cm', largura: '65cm', profundidade: '65cm' },
      peso: '100kg',
      capacidade: '400L',
      classeEnergetica: 'C'
    },
    temperaturas: {
      refrigerador: { min: 2, max: 8 },
      freezer: { min: 0, max: 0 }
    },
    componentes: {
      compressor: 'Tecumseh THS1380',
      ventilador: 'Ventilador Evaporador',
      termostato: 'Controlador Eletrônico',
      condensador: 'Condensador Aletado',
      evaporador: 'Evaporador Forçado'
    },
    particularidades: ['Prateleiras Reguláveis']
  },
  {
    id: 'MTR-007',
    nome: 'Cervejeira Slim 220L',
    codigo: 'VN22C',
    tipo: 'Refrigerador',
    marca: 'Metalfrio',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+MTR-007',
    especificacoes: {
      voltagem: '220V',
      consumo: '380W',
      dimensoes: { altura: '170cm', largura: '50cm', profundidade: '60cm' },
      peso: '70kg',
      capacidade: '220L',
      classeEnergetica: 'C'
    },
    temperaturas: {
      refrigerador: { min: -6, max: 2 },
      freezer: { min: 0, max: 0 }
    },
    componentes: {
      compressor: 'Embraco FFI10HAK',
      ventilador: 'Ventilador Evaporador',
      termostato: 'Controlador Eletrônico',
      condensador: 'Condensador Aletado',
      evaporador: 'Evaporador Forçado'
    },
    particularidades: ['Design Compacto para Cerveja']
  },
  {
    id: 'MTR-008',
    nome: 'Freezer Horizontal Tampa de Vidro 300L',
    codigo: 'HV30',
    tipo: 'Freezer',
    marca: 'Metalfrio',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+MTR-008',
    especificacoes: {
      voltagem: '127V',
      consumo: '400W',
      dimensoes: { altura: '94cm', largura: '110cm', profundidade: '70cm' },
      peso: '65kg',
      capacidade: '300L',
      classeEnergetica: 'D'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 0 },
      freezer: { min: -25, max: -15 }
    },
    componentes: {
      compressor: 'Tecumseh THB1340Y',
      ventilador: 'N/A',
      termostato: 'Termostato Comercial',
      condensador: 'Condensador Estático',
      evaporador: 'Evaporador Serpentina'
    },
    particularidades: ['Tampa de Vidro Deslizante Curvo']
  },
  {
    id: 'MTR-009',
    nome: 'Refrigerador Expositor para Flores 700L',
    codigo: 'VF70F',
    tipo: 'Refrigerador',
    marca: 'Metalfrio',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+MTR-009',
    especificacoes: {
      voltagem: '220V',
      consumo: '700W',
      dimensoes: { altura: '210cm', largura: '90cm', profundidade: '80cm' },
      peso: '140kg',
      capacidade: '700L',
      classeEnergetica: 'E'
    },
    temperaturas: {
      refrigerador: { min: 5, max: 10 },
      freezer: { min: 0, max: 0 }
    },
    componentes: {
      compressor: 'Compressor Especializado',
      ventilador: 'Ventilador de Umidade Controlada',
      termostato: 'Controlador de Temperatura e Umidade',
      condensador: 'Condensador Ventilado',
      evaporador: 'Evaporador Forçado'
    },
    particularidades: ['Sistema de Umidificação Controlada']
  },
  {
    id: 'MTR-010',
    nome: 'Freezer Vertical Slim 350L Porta Cega',
    codigo: 'VF35PC',
    tipo: 'Freezer',
    marca: 'Metalfrio',
    imagem: 'https://via.placeholder.com/600x400?text=Modelo+MTR-010',
    especificacoes: {
      voltagem: '127V',
      consumo: '450W',
      dimensoes: { altura: '190cm', largura: '60cm', profundidade: '65cm' },
      peso: '85kg',
      capacidade: '350L',
      classeEnergetica: 'C'
    },
    temperaturas: {
      refrigerador: { min: 0, max: 0 },
      freezer: { min: -24, max: -18 }
    },
    componentes: {
      compressor: 'Embraco NEK2134GK',
      ventilador: 'Ventilador Evaporador',
      termostato: 'Controlador Eletrônico',
      condensador: 'Condensador Aletado',
      evaporador: 'Evaporador Forçado'
    },
    particularidades: ['Uso Comercial (Armazenamento)']
  }
]