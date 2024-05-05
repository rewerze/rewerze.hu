<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">

        <!-- "Brand" -->
        <a href="/" class="navbar-brand">
            <p style="font-size: 30px"><?php echo $title ?> </p>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapseNavbar">

            <!-- Fontos oldalak -->
            <ul class="navbar-nav me-auto text-center">
                <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/social">Social</a>
                </li>
            </ul>

            <!-- Form -->
            <div>
                <form class="d-flex" id="search-form justify-content-center">
                    <input type="text" id="search-input" class="form-control me-2" placeholder="írj be valamit...">
                    <button class="btn-primary btn" type="submit">Keresés</button>
                </form>
            </div>
        </div>

    </div>

    <!-- Form js kódja -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-r6IEm8tu3t9TmlisD0NTXGNp8j63+nRv/KdSybSiwd9wUOfKw5hbI2EDZzr8Z2x7"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
        integrity="sha384-8OMfGaADHvc9oRxlY7+AzXv+pbFTm0fXgTQzGAVl7bKGw6lHZnpOW6M4CfTXtE7V"
        crossorigin="anonymous"></script>
    <script>
        document.getElementById('search-form').addEventListener('submit', function (event) {
            event.preventDefault();

            var searchTerm = document.getElementById('search-input').value.trim();

            if (searchTerm !== '') {
                var searchUrl = '/' + encodeURIComponent(searchTerm);

                window.location.href = searchUrl;
            } else {
                alert('Kérlek írj be valamit a kereséshez!');
            }
        });
    </script>
</nav>