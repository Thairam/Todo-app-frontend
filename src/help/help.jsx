import React from 'react'

import PageHeader from '../template/pageHeader'

export default props => (
    <div>
        <PageHeader name="Ajuda" small="tricks" />
        <h2>Teclas de Atalho</h2>
        <ul>
            <li><strong>Enter</strong> - adicionar TODO.</li>
            <li><strong>Shift + Enter</strong> - pesquisar TODOs.</li>
            <li><strong>Esc</strong> - limpar formulário.</li>
        </ul>
    </div>
)