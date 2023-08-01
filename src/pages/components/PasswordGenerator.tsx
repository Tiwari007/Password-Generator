import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Slider,
    TextField,
    Typography,
    Button
} from '@mui/material';
import styles from '@/styles/Home.module.css'
import clipboardCopy from 'clipboard-copy';
import Alert from '@mui/material/Alert';


const PasswordGenerator = () => {
    // let's create some state to save what we want to inclue in our generated password
    const [includeCapitalLetters, setIncludeCapitalLetters] = useState(true);
    const [includeSmallLetters, setIncludeSmallLetters] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecialSymbols, setIncludeSpecialSymbols] = useState(true);
    const [passwordLength, setPasswordLength] = useState(12);
    const [generatedPassword, setGeneratedPassword] = useState('');
    


    //   generated password logic
    const generatePassword = () => {
        const characters = [];
        if (includeCapitalLetters) characters.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        if (includeSmallLetters) characters.push('abcdefghijklmnopqrstuvwxyz');
        if (includeNumbers) characters.push('0123456789');
        if (includeSpecialSymbols) characters.push('!@#$%^&*()_+-=[]{}|;:,.<>?');

        const allCharacters = characters.join('');
        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * allCharacters.length);
            password += allCharacters.charAt(randomIndex);
        }
        setGeneratedPassword(password);
    };


    //   change password length as per slider
    const handlePasswordLengthChange = (_: any, newValue: any) => {
        setPasswordLength(newValue);
    };

    // for copy password to clipboard
    const handleCopyPassword = () => {
        clipboardCopy(generatedPassword);
        <Alert severity="success">Copied to Clipboard</Alert>
    };

    return (
        <Card className={styles.password__generator__card}>
            <CardHeader style={{ textAlign: "center" }} title="Password Generator" />
            <CardContent>
                <Typography gutterBottom>Password Length: {passwordLength}</Typography>
                <Slider
                    value={passwordLength}
                    min={8}
                    max={24}
                    step={1}
                    onChange={handlePasswordLengthChange}
                />


                <FormControl className={styles.include__features} component="fieldset">

                    <FormLabel component="legend">Include:</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={includeCapitalLetters}
                                    onChange={(e) => setIncludeCapitalLetters(e.target.checked)}
                                />
                            }
                            label="Capital Letters"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={includeSmallLetters}
                                    onChange={(e) => setIncludeSmallLetters(e.target.checked)}
                                />
                            }
                            label="Small Letters"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={includeNumbers}
                                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                                />
                            }
                            label="Numbers"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={includeSpecialSymbols}
                                    onChange={(e) => setIncludeSpecialSymbols(e.target.checked)}
                                />
                            }
                            label="Special Symbols"
                        />
                    </FormGroup>
                </FormControl>



                <Button className={styles.btn} onClick={generatePassword}>Generate Password</Button>
                {generatedPassword && (
                    <>
                        <TextField
                            label="Generated Password"
                            variant="outlined"
                            value={generatedPassword}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <Button className={styles.btn} variant="contained" color="primary" onClick={handleCopyPassword}>
                            Copy
                        </Button>
                    </>
                )}
            </CardContent>
        </Card>
    );
};

export default PasswordGenerator;
