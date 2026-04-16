import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LoginForm from './LoginForm.vue'

describe('LoginForm', () => {
  // Test 1: Render inicial
  it('renderiza ambos inputs y botón deshabilitado por defecto', () => {
    const wrapper = mount(LoginForm)
    
    const emailInput = wrapper.get('[data-testid="email"]')
    const passwordInput = wrapper.get('[data-testid="password"]')
    const submitButton = wrapper.get('[data-testid="submit-button"]')
    
    expect(emailInput.exists()).toBe(true)
    expect(passwordInput.exists()).toBe(true)
    expect(submitButton.exists()).toBe(true)
    expect(submitButton.attributes('disabled')).toBeDefined()
  })

  // Test 2: Validación de email inválido
  it('muestra mensaje de error y mantiene botón deshabilitado con email inválido', async () => {
    const wrapper = mount(LoginForm)
    
    const emailInput = wrapper.get('[data-testid="email"]')
    const passwordInput = wrapper.get('[data-testid="password"]')
    
    // Escribir email inválido
    await emailInput.setValue('email-invalido')
    await emailInput.trigger('blur')
    
    // Verificar mensaje de error
    const errorMessage = wrapper.get('[data-testid="error"]')
    expect(errorMessage.exists()).toBe(true)
    expect(errorMessage.text()).toContain('Email inválido')
    
    // Llenar password pero mantener botón deshabilitado
    await passwordInput.setValue('password123')
    
    const submitButton = wrapper.get('[data-testid="submit-button"]')
    expect(submitButton.attributes('disabled')).toBeDefined()
  })

  // Test 3: Habilitación del botón con datos válidos
  it('habilita el botón cuando email es válido y password no está vacío', async () => {
    const wrapper = mount(LoginForm)
    
    const emailInput = wrapper.get('[data-testid="email"]')
    const passwordInput = wrapper.get('[data-testid="password"]')
    
    // Escribir email válido
    await emailInput.setValue('usuario@dominio.com')
    await emailInput.trigger('input')
    
    // Escribir password
    await passwordInput.setValue('password123')
    
    const submitButton = wrapper.get('[data-testid="submit-button"]')
    expect(submitButton.attributes('disabled')).toBeUndefined()
  })

  // Test 4: Envío válido con emisión de evento
  it('emite evento submit con email trimmeado y password, luego limpia password', async () => {
    const wrapper = mount(LoginForm)
    
    const emailInput = wrapper.get('[data-testid="email"]')
    const passwordInput = wrapper.get('[data-testid="password"]')
    const form = wrapper.find('form')
    
    // Llenar formulario con email con espacios
    await emailInput.setValue('  usuario@dominio.com  ')
    await passwordInput.setValue('password123')
    
    // Enviar formulario
    await form.trigger('submit.prevent')
    
    // Verificar emisión del evento
    const emitted = wrapper.emitted()
    expect(emitted.submit).toBeTruthy()
    expect(emitted.submit[0]).toEqual([{
      email: 'usuario@dominio.com', // Sin espacios
      password: 'password123'
    }])
    
    // Verificar que password se limpió
    expect(wrapper.vm.password).toBe('')
    // Email se mantiene
    expect(wrapper.vm.email).toBe('usuario@dominio.com')
  })

  // Test 5: Email sin @ es inválido
  it('considera inválido un email sin @', async () => {
    const wrapper = mount(LoginForm)
    
    const emailInput = wrapper.get('[data-testid="email"]')
    await emailInput.setValue('usuariodominio.com')
    await emailInput.trigger('input')
    
    expect(wrapper.find('[data-testid="error"]').exists()).toBe(true)
  })

  // Test 6: Password vacío mantiene botón deshabilitado
  it('mantiene botón deshabilitado si password está vacío aunque email sea válido', async () => {
    const wrapper = mount(LoginForm)
    
    const emailInput = wrapper.get('[data-testid="email"]')
    await emailInput.setValue('usuario@dominio.com')
    await emailInput.trigger('input')
    
    const submitButton = wrapper.get('[data-testid="submit-button"]')
    expect(submitButton.attributes('disabled')).toBeDefined()
  })
})