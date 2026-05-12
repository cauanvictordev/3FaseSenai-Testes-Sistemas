import { test, expect } from '@playwright/test'

test("implementar o contador de click", async ({ page }) => {
    // Navegar até a home
    await page.goto('/')

    // Localizar o botão de forma genérica para não quebrar quando o texto mudar
    const counterButton = page.getByRole('button')

    // Verificar se o button está na tela
    await expect(counterButton).toBeVisible()

    // Clicar no botão para ir de 0 para 1 (o que vocês fizeram em sala)
    await counterButton.click()
    await expect(counterButton).toContainText('Count is 1')

    // Implementar X quantidade de cliques (ex: mais 5 cliques para chegar em 6)
    for (let i = 0; i < 5; i++) {
        await counterButton.click()
    }

    // Verificar se o conteúdo final está correto (Count is 6)
    await expect(counterButton).toContainText('Count is 6')
})