import { FormWrapper } from "./FormWrapper";

type accountData = {
    email: string
    password: string
}

type accountFormProps = accountData & {
    updateFields: (fields: Partial<accountData>) => void
}

export function AccountForm({ email, password, updateFields }: accountFormProps) {
    return (
        <FormWrapper title="Sign Up">
            <label>Email</label>
            <input 
                autoFocus 
                required 
                type="email" 
                value={ email } 
                onChange={ e => updateFields({ email: e.target.value })} />
            <label>Password</label>
            <input 
                required 
                type="password" 
                value={ password } 
                onChange={ e => updateFields({ password: e.target.value })} />
        </FormWrapper>
    )
}