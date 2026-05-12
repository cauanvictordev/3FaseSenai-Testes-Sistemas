// Teste Negativo (Login Inválido)
test('deve exibir erro ao inserir login inválido', async ({ page }) => {
  await page.goto('http://localhost:5173');
  
  // Verifique se o texto no HTML é 'Username' ou 'Usuário'
  await page.getByPlaceholder('Username').fill('usuario_errado'); 
  await page.getByPlaceholder('Password').fill('senha_errada');
  
  await page.getByRole('button', { name: /entrar|login/i }).click();

  // Verifica se apareceu o alerta de erro
  const mensagemErro = page.locator('text=Usuário ou senha inválidos');
  await expect(mensagemErro).toBeVisible();
});

// Teste de Logout
test('deve fazer login e depois sair', async ({ page }) => {
  await page.goto('http://localhost:5173');
  
  await page.getByPlaceholder('Username').fill('admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: /entrar|login/i }).click();

  // Clica no botão de sair (ajuste o nome se for 'Logout' ou 'Sair')
  await page.getByRole('button', { name: /sair|logout/i }).click();

  // Verifica se voltou para a tela de login
  await expect(page).toHaveURL(/.*login/);
});
