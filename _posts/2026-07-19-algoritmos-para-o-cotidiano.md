---
title: "Algoritmos para o Cotidiano"
date: 2026-07-19
---

Muitas vezes, ouvimos a palavra **algoritmo** e pensamos imediatamente em inteligência artificial complexa ou redes sociais ~~nos manipulando~~ manipulando nossos feeds. No entanto, um algoritmo é apenas um método: [uma sequência finita de passos lógicos que servem para resolver um problema](https://pt.wikipedia.org/wiki/Algoritmo).

<!-- more -->

Algoritmos que fazem parte de programas de computador precisam ser (mas nem sempre são) otimizados para funcionar em um processador que muitas das vezes é limitado ou a memória é pequena, como o chip de um *smartwatch*, o painel de um micro-ondas ou a placa que controla os ciclos de uma máquina de lavar roupa. O interessante é que nossos cérebros enfrentam limitações que podem ser compreendidas através dessa mesma forma, como uma memória de curto prazo restrita e uma capacidade de processamento que precisa ser bem gerida.

Ao observarmos nossos desafios diários sob a perspectiva de modelos computacionais, podemos encontrar estruturas úteis que cientistas e matemáticos estudam há décadas. Não se trata de buscar uma eficácia infalível ou de virar um robô, mas de usar esses modelos como **ferramentas de apoio que podem ajudar a organizar melhor o fluxo mental** e oferecer clareza em decisões comuns, sem a pretensão de eliminar completamente a complexidade ou a margem de erro da vida real.

# **Como fazer uma escolha?**

Você já se viu no dilema entre **continuar procurando por algo melhor ou aceitar o que já encontrou?** Seja analisando um apartamento ou uma vaga de estacionamento, a matemática oferece a "Regra dos 37%" como um guia referencial. Esse modelo de parada ótima, famoso na matemática e conhecido como o [Problema da Secretária](https://en.wikipedia.org/wiki/Secretary_problem), demonstra estatisticamente que a melhor estratégia é dedicar **os primeiros 37% do seu tempo de busca apenas à observação e ao estabelecimento de um critério de qualidade**, sem a pressão de tomar uma decisão imediata.

Após essa fase de exploração, a sugestão é considerar a próxima opção que supere o que foi visto anteriormente. Embora não garanta o resultado perfeito, essa lógica ajuda a **equilibrar as chances entre o risco de procurar indefinidamente e o de se contentar cedo demais** com uma escolha pouco satisfatória, oferecendo um suporte racional para lidar com a incerteza.

Para aplicar essa regra nesse contexto, comece definindo o tempo total que você tem para tomar a decisão. Utilize os primeiros 37% desse período para explorar livremente, coletando referências sem o compromisso de decidir, o que ajudará a estabelecer um "padrão de ouro", a melhor opção vista até o momento. Após essa janela inicial, o seu objetivo deve ser **aceitar a primeira opção que superar esse padrão estabelecido**, garantindo uma escolha eficiente.

# **O Mais Usado Mais Próximo**

Os computadores usam o [*Caching*](https://pt.wikipedia.org/wiki/Cache) para manter dados importantes acessíveis de forma instantânea. O algoritmo [LRU (Least Recently Used)](https://en.wikipedia.org/wiki/Cache\_replacement\_policies\#Least\_Recently\_Used\_(LRU)) dita que, **quando o espaço acaba, devemos descartar o item que não foi usado há mais tempo**. Esse conceito é usado pela Netflix para entregar filmes sem travamentos, pelos navegadores de internet para carregar sites frequentes instantaneamente e pelo seu celular, que fecha sozinho os aplicativos que você não abre há muito tempo para manter a memória livre para os que você mais usa. 

Podemos aplicar isso diretamente na organização de casa, especialmente com os brinquedos da sua filha. Se a caixa de brinquedos ou o quarto está lotado, a solução não é apenas arrumar, mas aplicar um sistema de cache: os brinquedos e jogos que ela usa toda semana ficam acessíveis nas prateleiras mais baixas ou nos cestos da frente (cache rápido), enquanto aqueles de uso raro vão para o alto do armário ou para caixas fechadas (armazenamento secundário). Se um brinquedo não é tocado há mais de um ano, ele se torna o "LRU" e deve ser doado para liberar espaço para o que faz sentido na fase atual dela. Essa lógica reduz o "tempo de busca" pela brincadeira favorita no dia a dia e evita a sobrecarga visual de manter objetos sem uso espalhados pela casa.

No cotidiano, o *caching* se manifesta na forma como organizamos o que está ao nosso alcance imediato para minimizar o esforço de busca. Manter as peças do dia a dia, como as roupas de trabalho ou de treino, nas gavetas mais acessíveis e na altura das mãos, em vez de misturá-las com casacos pesados ou trajes de festa no fundo do armário, é uma aplicação prática dessa lógica. Ao priorizar o acesso rápido aos itens de uso frequente e mover o que é raramente utilizado para espaços de armazenamento secundário, como maleiros ou depósitos, criamos um sistema que otimiza nosso tempo e reduz a fadiga de procurar o que é essencial para a rotina presente.

# **Como ser Monotasking?**

Vivemos em uma sociedade que valoriza a multitarefa, mas, como mostram as [pesquisas](https://doi.org/10.1590/1981-5794-1608-8), não somos capazes disso, **nossos cérebros são como os computadores antigos que tinham apenas uma única CPU**. Um sistema operacional (a consciência) precisa decidir qual tarefa a CPU (o cérebro) deve executar a cada milissegundo. Quando tentamos ser multitarefa, na verdade estamos forçando nosso cérebro a realizar trocas de contexto ([*context switching*](https://en.wikipedia.org/wiki/Context\_switch)). Cada vez que você para de escrever um relatório para responder a um WhatsApp, **seu cérebro gasta energia para "recarregar" o estado mental da tarefa anterior**. Esse custo é invisível, mas drena sua energia mental.

Uma forma de combater isso, é usando algoritmos de escalonamento como o [*Shortest Processing Time*](https://en.wikipedia.org/wiki/Shortest_remaining_time) (resolver tarefas rápidas primeiro para liberar a lista) ou o [*Earliest Deadline First*](https://en.wikipedia.org/wiki/Earliest\_deadline\_first\_scheduling) (focar no que vence antes). O segredo é agrupar tarefas similares para minimizar as trocas de contexto e proteger seu foco.

O escalonamento eficiente funciona como uma **estratégia para proteger nossa energia mental contra as constantes interrupções**. Um exemplo comum é a escolha de agrupar todas as respostas de e-mails e mensagens em um único bloco de tempo dedicado, em vez de reagir a cada notificação assim que ela surge. Essa abordagem permite que o cérebro permaneça em um estado de fluxo por mais tempo, evitando o alto custo cognitivo da troca de contexto e garantindo que atividades similares sejam processadas em sequência para manter a produtividade estável.

# **O que fazer primeiro?**

A [ordenação topológica](https://pt.wikipedia.org/wiki/Ordena%C3%A7%C3%A3o\_topol%C3%B3gica) é usada para organizar tarefas que possuem dependências estritas, ou seja, quando **a tarefa B não pode começar antes da tarefa A terminar**. No cotidiano, isso é a diferença entre um projeto fluido e um pesadelo de retrabalho. Imagine algo tão simples quanto se vestir para sair: se você **calçar os sapatos antes de colocar as meias**, perceberá o erro imediatamente e terá que desfazer o processo para seguir a ordem correta. Agora imagine um projeto com várias tarefas, qual deve ser a primeira que irá destravar as outras?

Ao mapear as dependências de um projeto complexo, você cria o que chamamos de grafo de precedência. A imagem a seguir ilustra bem esse conceito: as letras são as tarefas e as setas mostram a ordem de execução.

<figure class="post-figure" style="--post-figure-max: 28rem;">
  <img src="{{ site.baseurl }}/images/posts/algoritmos-no-cotidiano-grafo.png" alt="Exemplo simples de um grafo de precedência">
  <figcaption>Figura: exemplo simples de um grafo de precedência.</figcaption>
</figure>

A ordenação topológica ajuda a identificar o caminho crítico e garante que você nunca fique parado esperando por algo que poderia ter sido resolvido no início. Para entender como o algoritmo resolve nosso exemplo simples, veja a lógica passo a passo com base no grafo:

1. **Encontre as tarefas "livres":** O primeiro passo é buscar as tarefas que não dependem de nenhuma outra (com 0 dependências pendentes). No grafo, são **A** e **G**. Você pode executá-las em qualquer ordem. Vamos executar **A** e depois **G**.  
2. **Corte as dependências:** Ao concluir A e G, você "corta" as setas que saem delas, eliminando as barreiras que seguravam as etapas seguintes.  
3. **Desbloqueie a próxima fase:** Com as amarras cortadas, a tarefa **B** (que dependia de A) fica livre (com 0 dependências pendentes). Você a executa e corta todas as setas que saem dela (para C, D, E).  
4. **Siga o caminho crítico:** As tarefas **C** (dependia de B) e **D** (dependia de B e G) agora estão com todas as suas dependências satisfeitas. Você pode executá-las (por exemplo, primeiro C, depois D) e cortar as setas que saem delas para E.  
5. **Finalize o fluxo:** A tarefa **E** (que dependia de B, C, D) agora está com 0 dependências. Você a executa e corta a seta para F. Finalmente, a tarefa **F** (que dependia de E) está livre para ser executada.  
6. **O resultado:** A sequência ideal resultante é: **A, G, B, C, D, E, F** (ou outra variação, como G, A, B, D, C, E, F).

A ordenação topológica é a espinha dorsal do planejamento de projetos onde a ordem dos fatores altera drasticamente o resultado. Ignorar essa dependência transformaria o trabalho em um ciclo de retrabalho constante. Ao reconhecer que certas etapas definem o ritmo das seguintes, conseguimos visualizar o projeto como um fluxo lógico, garantindo que cada ação seja tomada no momento exato em que seus pré-requisitos foram satisfeitos.

# **Conclusão**

Adotar algoritmos no dia a dia não significa abandonar a intuição ou a espontaneidade por uma fórmula pronta. Na verdade, muitas vezes já recorremos a essas lógicas de forma instintiva, sem sequer percebermos. O grande diferencial está em trazer essa percepção para o nível consciente, ao compreendermos a mecânica por trás das nossas ações, ganhamos o poder de aplicá-las de forma intencional.

Entender a desorganização como um desafio de *caching* ou a procrastinação como uma questão de escalonamento não resolve o problema instantaneamente, mas nos oferece ferramentas para gerenciar melhor o cotidiano. Viver com o apoio de algoritmos é, acima de tudo, buscar uma perspectiva mais clara e consciente para navegar na complexidade.


---

*Esse texto foi inspirado pelo livro **Algoritmos para Viver: A Ciência Exata das Decisões Humanas** de Brian Christian e Tom Griffiths.*

*Esse texto contou com a revisão de [Ianca Miranda](https://www.linkedin.com/in/joaquinaianca/) e [Luane Tomé](https://www.linkedin.com/in/luanetom%C3%A9/).*
