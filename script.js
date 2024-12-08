<script>
  // REALIZA A CRIAÇÃO DO BOTÃO
  const whatsappButton = document.createElement("div");
  whatsappButton.style.position = "fixed";
  whatsappButton.style.bottom = "20px";
  whatsappButton.style.right = "15px";
  whatsappButton.style.backgroundColor = "#25d366";
  whatsappButton.style.borderRadius = "50%";
  whatsappButton.style.width = "55px";
  whatsappButton.style.height = "55px";
  whatsappButton.style.display = "flex";
  whatsappButton.style.justifyContent = "center";
  whatsappButton.style.alignItems = "center";
  whatsappButton.style.cursor = "pointer";
  whatsappButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  whatsappButton.style.zIndex = "999999";

  // CRIAÇÃO E INSERÇÃO DO ICONE DO WPP
  const whatsappIcon = document.createElement("img");
  whatsappIcon.src = "https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png";
  whatsappIcon.alt = "WhatsApp";
  whatsappIcon.style.width = "30px";
  whatsappIcon.style.height = "30px";
  whatsappButton.appendChild(whatsappIcon);

  // CRIA O FORMULÁRIO DE CAPTURA DOS DADOS
  // NECESSÁRIO AJUSTAR ESSE CÓDIGO DE ACORDO COM A ESTRUTURA DA SUA LANDING PAGE/SITE
  const formPopup = document.createElement("div");
  formPopup.style.position = "fixed";
  formPopup.style.bottom = "85px"; // AJUSTAR
  formPopup.style.right = "15px"; // AJUSTAR 
  formPopup.style.backgroundColor = "#fff";
  formPopup.style.border = "1px solid #ddd";
  formPopup.style.borderRadius = "12px";
  formPopup.style.width = "85%"; // AJUSTAR
  formPopup.style.maxWidth = "350px"; // AJUSTAR
  formPopup.style.padding = "15px"; // AJUSTAR
  formPopup.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
  formPopup.style.zIndex = "999999";
  formPopup.style.display = "none";

  //ALTERAR O CÓDIGO ABAIXO DE ACORDO COM A NECESSIDADE DA OPERAÇÃO
  formPopup.innerHTML = `
    <form id="whatsappForm" style="display: flex; flex-direction: column; gap: 10px;">
      <label for="name" style="font-size: 14px; font-weight: bold;">Nome</label>
      <input type="text" id="name" name="name" required placeholder="Seu nome" style="padding: 10px; border: 1px solid #ccc; border-radius: 8px;">

      <label for="email" style="font-size: 14px; font-weight: bold;">Seu melhor e-mail</label>
      <input type="email" id="email" name="email" required placeholder="Seu e-mail" style="padding: 10px; border: 1px solid #ccc; border-radius: 8px;">

      <label for="phone" style="font-size: 14px; font-weight: bold;">WhatsApp</label>
      <input type="tel" id="phone" name="phone" required placeholder="Seu número de WhatsApp" style="padding: 10px; border: 1px solid #ccc; border-radius: 8px;">

      <label for="produto" style="font-size: 14px; font-weight: bold;">Empreendimento</label>
      <select id="produto" name="produto" required style="padding: 10px; border: 1px solid #ccc; border-radius: 8px;">
        <option value="">Selecionar uma opção</option>
        <option value="PRODUTO X">PRODUTO X</option>
        <option value="PRODUTO Y">PRODUTO Y</option>
        <option value="PRODUTO Z">PRODUTO Z</option>
      </select>

      <button type="submit" style="background-color: #a4d65e; color: white; border: none; padding: 12px; border-radius: 8px; font-size: 16px; cursor: pointer;">Falar no WhatsApp</button>
    </form>
  `;

  // INSERÇÃO DO BOTÃO E FORMULÁRIO
  document.body.appendChild(whatsappButton);
  document.body.appendChild(formPopup);

  // ALTERNAR O BOTÃO DO FORMULÁRIO PARA ABRIR E FECHAR O POPUP
  const toggleForm = () => {
    if (formPopup.style.display === "none" || formPopup.style.display === "") {
      formPopup.style.display = "block";
      whatsappIcon.src = "https://img.icons8.com/ios-filled/50/ffffff/multiply.png"; 
    } else {
      formPopup.style.display = "none";
      whatsappIcon.src = "https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png"; 
    }
  };

  whatsappButton.addEventListener("click", toggleForm);

  // ESTRUTURA DE CAPTURA E ENVIO DE INFORMAÇÕES VIA WEBHOOK
  document.getElementById("whatsappForm").addEventListener("submit", (event) => {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const produto = document.getElementById("produto").value;

    // URL DO WEBHOOK
    const webhookUrl = "https://coloque aqui a sua url.com/";

    // DADOS QUE SERÃO ENVIADOS - AJUSTAR DE ACORDO COM A NECESSIDADE DA OPERAÇÃO
    const data = {
      name: name,
      email: email,
      phone: phone,
      produto: produto,
    };

    // METÓDO DE POST PARA ENVIAR AS INFORMAÇÕES PARA O WEBHOOK
    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert("Estamos te redirecionando para o WhatsApp");
          // REDIRECT PÓS ENVIO
          window.open(`https://wa.me/NUMERO`);
          toggleForm(); // FECHA O FORM APÓS O ENVIO
        } else {
          alert("Ocorreu um erro ao enviar os dados.");
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar os dados:", error);
        alert("Não foi possível enviar os dados.");
      });
  });
</script>
