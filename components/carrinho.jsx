import styles from './Carrinho.module.css';

function Carrinho({ itens }) {
  const total = itens.reduce((acc, item) => {
    return acc + (item.preco * item.quantidade);
  }, 0);

  return (
    <div className={styles.containerCarrinho}>
      <h2>🛒Resumo da compra:</h2>
      
      <div className={styles.listaProdutos}>
        {itens.map((item) => {
          const subtotal = item.preco * item.quantidade;

          return (
            <div key={item.id} className={styles.cardItem}>
              {}
              <img 
                src={item.imagem } 
                alt={item.nome} 
                className={styles.fotoProduto} 
              />
              
              <div className={styles.infoProduto}>
                <h3>{item.nome}</h3>
                <p>Qtd: {item.quantidade}</p>
                <p>Unitário: R$ {item.preco.toFixed(2)}</p>
              </div>

              <div className={styles.precoBox}>
                R$ {subtotal.toFixed(2)}
              </div>
            </div>
          );
        })}
      </div>
      
      <hr className={styles.linhaDivisoria} />
      
      <div className={styles.totalBox}>
        <span>Total:</span>
        <strong className={styles.valorDestaque}>R$ {total.toFixed(2)}</strong>
      </div>

      <button className={styles.botaoFinalizar}>
        Finalizar Compra
      </button>
    </div>
  );
}

export default Carrinho;