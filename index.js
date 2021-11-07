const $global = document.getElementById("global");

const getUsers = async () => {
    try {
        const api = await fetch("https://reqres.in/api/users/")
        const apiJson = await api.json();
        console.log(apiJson)
        apiJson.data.forEach((user) => {
            $global.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img loading="lazy" src="${user.avatar}" class="img-fluid rounded-start"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title"><b>Name:</b> ${user.first_name} ${user.last_name}</h5>
                            <h5 class="card-title"><b>Email:</b> ${user.email}</h5>
                        </div>
                    </div>
                </div>
            </div>
            `
        })
    }
    catch (error) {
        $global.innerHTML = `<h1>Ocurrio un error, intentalo nuevamente`
    }
}

getUsers();