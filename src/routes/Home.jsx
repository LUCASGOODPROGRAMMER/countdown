import { useState, useContext } from 'react'

import { CountdownContext } from '../context/CountDownContext'

import { useNavigate } from 'react-router-dom'

import LettersDigits from '../components/LettersDigits'

import './Home.css'

const Home = () => {
    const [titulo, setTitulo] = useState()
    const [data, setData] = useState()
    const [imagem, setImagem] = useState()
    const [cor, setCor] = useState("#9141ac")

    const {setEvent}   = useContext(CountdownContext)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const eventObject = {
            titulo,
            data,
            imagem,
            cor,
        }
        setEvent(eventObject)

       navigate("/countdown")
    }


    return (
        <main className="home-container">
            <LettersDigits text="🎯 Preencha o formulário de contagem regressiva" />

            <form className="countdown-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Título:</label>
                    <input type="text" id="title" name="title" placeholder="Digite o título do evento" onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="date">Data do Evento:</label>
                    <input type="date" id="date" name="date" onChange={(e) => setData(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Imagem (URL):</label>
                    <input type="text" id="image" name="image" placeholder="Link da imagem" onChange={(e) => setImagem(e.target.value)} />
                </div>

                {/**
                 * <div className="form-group">
                    <label htmlFor="color">Cor Tema:</label>
                    <div id="eye">
                        <input type="color" id="color" name="color" onChange={(e) => setCor(e.target.value)} required />
                        <div id="point"></div>
                    </div>
                </div>
                 */}

                <button type="submit" className="submit-btn">Enviar</button>
            </form>
        </main>
    )
}

export default Home
