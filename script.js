<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trip Decoder - Passeios no Rio de Janeiro e Niterói</title>
    <link rel="shortcut icon" href="tripdecoder.ico" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <style>
        /* General Styles */
        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: #121212; /* Fundo escuro */
            color: #e0e0e0; /* Texto claro */
        }

        header {
            background-color: #1f1f1f; /* Header escuro */
            color: #fff;
            padding: 20px 10%;
            display: flex;
            justify-content: center; /* Centraliza o conteúdo */
            align-items: center;
            flex-direction: column; /* Coloca o logo e o nav em coluna */
        }

        .logo {
            display: flex;
            align-items: center;
            margin-bottom: 20px; /* Espaço entre o logo e o nav */
        }

        .logo img {
            width: 80px; /* Logo maior */
            margin-right: 15px;
        }

        .logo h1 {
            font-size: 2rem; /* Título maior */
        }

        nav ul {
            list-style: none;
            display: flex;
            gap: 20px;
            padding: 0;
        }

        nav ul li a {
            color: #fff;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s;
        }

        nav ul li a:hover {
            color: #1abc9c; /* Cor de destaque */
        }

        /* Hero Section */
        .hero {
            background: url('https://source.unsplash.com/1600x900/?rio-de-janeiro,night') no-repeat center center/cover;
            height: 60vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: #fff;
            padding: 0 10%;
        }

        .hero-content h2 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        .hero-content p {
            font-size: 1.2rem;
            margin-bottom: 20px;
        }

        .btn {
            background-color: #1abc9c;
            color: #fff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        .btn:hover {
            background-color: #16a085;
        }

        /* Passeios Section */
        .passeios {
            padding: 50px 10%;
            text-align: center;
        }

        .passeios h2 {
            font-size: 2rem;
            margin-bottom: 30px;
        }

        .passeios-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }

        .passeio-card {
            background-color: #1f1f1f; /* Cards escuros */
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 300px;
            padding: 20px;
            transition: transform 0.3s;
        }

        .passeio-card:hover {
            transform: translateY(-10px);
        }

        .passeio-card img {
            width: 100%;
            border-radius: 10px;
            margin-bottom: 15px;
        }

        .passeio-card h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        .passeio-card p {
            font-size: 1rem;
            margin-bottom: 10px;
        }

        .passeio-card .preco {
            font-size: 1.2rem;
            font-weight: 600;
            color: #1abc9c; /* Cor de destaque */
        }

        .passeio-card button {
            background-color: #1abc9c;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .passeio-card button:hover {
            background-color: #16a085;
        }

        /* Depoimentos Section */
        .depoimentos {
            padding: 50px 10%;
            text-align: center;
            background-color: #1f1f1f; /* Fundo escuro */
        }

        .depoimentos h2 {
            font-size: 2rem;
            margin-bottom: 30px;
        }

        .depoimentos-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }

        .depoimento-card {
            background-color: #2c3e50; /* Cards escuros */
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 300px;
            padding: 20px;
        }

        .depoimento-card p {
            font-style: italic;
            margin-bottom: 10px;
        }

        .depoimento-card .autor {
            font-weight: 600;
            color: #1abc9c; /* Cor de destaque */
        }

        /* Contato Section */
        .contato {
            padding: 50px 10%;
            text-align: center;
        }

        .contato h2 {
            font-size: 2rem;
            margin-bottom: 30px;
        }

        #form-contato {
            display: flex;
            flex-direction: column;
            gap: 15px;
            max-width: 500px;
            margin: 0 auto;
        }

        #form-contato input,
        #form-contato textarea {
            padding: 10px;
            border: 1px solid #444;
            border-radius: 5px;
            font-size: 1rem;
            background-color: #1f1f1f; /* Fundo escuro */
            color: #e0e0e0; /* Texto claro */
        }

        #form-contato button {
            background-color: #1abc9c;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        #form-contato button:hover {
            background-color: #16a085;
        }

        /* Footer */
        footer {
            background-color: #1f1f1f; /* Fundo escuro */
            color: #fff;
            text-align: center;
            padding: 20px;
            margin-top: 50px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            header {
                flex-direction: column;
                text-align: center;
            }

            nav ul {
                flex-direction: column;
                gap: 10px;
            }

            .hero-content h2 {
                font-size: 2rem;
            }

            .hero-content p {
                font-size: 1rem;
            }

            .passeios-container,
            .depoimentos-container {
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <!-- Cabeçalho -->
    <header>
        <div class="logo">
            <img src="tripdecoder.ico" alt="Trip Decoder Logo">
            <h1>Trip Decoder</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#passeios">Passeios</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>

    <!-- Seção Hero -->
    <section class="hero">
        <div class="hero-content">
            <h2>Descubra o Rio de Janeiro e Niterói com quem conhece!</h2>
            <p>Reserve agora seus passeios pelos principais pontos turísticos.</p>
            <a href="#passeios" class="btn">Reservar Agora</a>
        </div>
    </section>

    <!-- Seção de Passeios -->
    <section id="passeios" class="passeios">
        <h2>Nossos Passeios</h2>
        <div class="passeios-container">
            <div class="passeio-card">
                <img src="https://source.unsplash.com/400x300/?christ-the-redeemer,night" alt="Cristo Redentor">
                <h3>Cristo Redentor</h3>
                <p>Visite um dos pontos turísticos mais famosos do mundo.</p>
                <p class="preco">R$ 150,00</p>
                <button onclick="reservarPasseio('Cristo Redentor')">Reservar</button>
            </div>
            <div class="passeio-card">
                <img src="https://source.unsplash.com/400x300/?sugarloaf-mountain,night" alt="Pão de Açúcar">
                <h3>Pão de Açúcar</h3>
                <p>Desfrute de uma vista incrível da cidade do Rio de Janeiro.</p>
                <p class="preco">R$ 120,00</p>
                <button onclick="reservarPasseio('Pão de Açúcar')">Reservar</button>
            </div>
            <div class="passeio-card">
                <img src="https://source.unsplash.com/400x300/?icaraí-beach,night" alt="Praia de Icaraí">
                <h3>Praia de Icaraí</h3>
                <p>Relaxe nas belas praias de Niterói.</p>
                <p class="preco">R$ 80,00</p>
                <button onclick="reservarPasseio('Praia de Icaraí')">Reservar</button>
            </div>
        </div>
    </section>

    <!-- Seção de Depoimentos -->
    <section id="depoimentos" class="depoimentos">
        <h2>Depoimentos</h2>
        <div class="depoimentos-container">
            <div class="depoimento-card">
                <p>"Adoramos o passeio ao Cristo Redentor! O guia foi muito atencioso."</p>
                <p class="autor">- Ana Silva</p>
            </div>
            <div class="depoimento-card">
                <p>"Pão de Açúcar é imperdível! Recomendo a todos."</p>
                <p class="autor">- João Souza</p>
            </div>
        </div>
    </section>

    <!-- Seção de Contato -->
    <section id="contato" class="contato">
        <h2>Contato</h2>
        <form id="form-contato">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required>
            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" required></textarea>
            <button type="submit">Enviar</button>
        </form>
    </section>

    <!-- Rodapé -->
    <footer>
        <p>&copy; 2023 Trip Decoder. Todos os direitos reservados.</p>
    </footer>

    <!-- Script JavaScript -->
    <script>
        function reservarPasseio(nomePasseio) {
            alert(`Você reservou o passeio: ${nomePasseio}`);
        }
    </script>
</body>
</html>
