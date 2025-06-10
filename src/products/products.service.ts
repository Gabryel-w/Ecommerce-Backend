import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ProductsService {
  private brazilianProviderUrl = 'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider';
  private europeanProviderUrl = 'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider';

  async getAllProducts() {
    const [brazilianResponse, europeanResponse] = await Promise.all([
      axios.get(this.brazilianProviderUrl),
      axios.get(this.europeanProviderUrl),
    ]);

    // Normalizado os produtos em um formato unificado
    const brazilianProducts = brazilianResponse.data.map((product) => ({
      id: `brazilian-${product.id}`,
      name: product.nome,
      description: product.descricao,
      image: product.imagem,
      price: parseFloat(product.preco),
      provider: 'brazilian',
    }));

    const europeanProducts = europeanResponse.data.map((product) => ({
      id: `european-${product.id}`,
      name: product.name,
      description: product.description,
      image: product.gallery?.[0] || '',
      price: parseFloat(product.price),
      provider: 'european',
    }));

    return [...brazilianProducts, ...europeanProducts];
  }
}
