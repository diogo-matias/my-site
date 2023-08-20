import {
    Button,
    CircularProgress,
    Grid,
    Typography,
    styled,
    useTheme,
} from "@mui/material";
import { createStyle } from "./styles";

import { useFormik } from "formik";
import { BaseInput } from "components/baseInput";
import { SiLinkedin, SiGithub, SiWhatsapp, SiGmail } from "react-icons/si";
import { SOCIAL } from "@constants/social";
import * as Yup from "yup";
import { BaseTextarea } from "components/baseTextarea";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { ContactActions } from "@store/modules/contact";
import { FaX, FaCheck } from "react-icons/fa6";
import { SECTIONS } from "@constants/sections";
import { STRINGS } from "language";

const Text = styled(Typography)(({ theme }) => ({
    textAlign: "end",
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const EmailText = styled(Typography)(({ theme }) => ({
    cursor: "pointer",

    ":hover": {
        textDecoration: "underline",
    },
}));

const ButtonsContainer = styled(Typography)(({ theme }) => ({
    display: "flex",
    fontSize: 50,
    gap: 20,
    marginBottom: 30,
    marginTop: 30,
    cursor: "pointer",
}));

const LeftContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    paddingRight: 50,

    [theme.breakpoints.down("md")]: {
        alignItems: "start",
        marginBottom: 30,
    },
}));

export function Contact() {
    const theme = useTheme();
    const styles = createStyle(theme);
    const dispatch = useAppDispatch();

    const { hasError, isLoading, showSuccess } = useAppSelector(
        (state) => state.contact
    );

    const FormikSchema = Yup.object().shape({
        name: Yup.string().required("Required"),

        email: Yup.string().email("Invalid email").required("Required"),
        subject: Yup.string().min(5, "Too Short!").required("Required"),
        message: Yup.string().min(5, "Too Short!").required("Required"),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validationSchema: FormikSchema,
        onSubmit: (values) => {
            dispatch(ContactActions.sendMessage(values));
        },
    });

    function renderTitle() {
        return (
            <Grid container sx={styles.titleContainer}>
                <Typography variant="h3" fontWeight={600}>
                    {STRINGS.CONTACT.TITLE}
                </Typography>
                <div style={styles.divider} />
            </Grid>
        );
    }

    function handleNavigation(link: string) {
        window.open(link, "_blank");
    }

    function renderLeftSide() {
        return (
            <LeftContainer>
                <Text variant="h4">{STRINGS.CONTACT.CALL_TO_SEND_MESSAGE}</Text>
                <ButtonsContainer>
                    <SiGithub onClick={() => handleNavigation(SOCIAL.GITHUB)} />
                    <SiLinkedin
                        onClick={() => handleNavigation(SOCIAL.LINKEDIN)}
                    />
                    <SiWhatsapp
                        onClick={() => handleNavigation(SOCIAL.WHATSAPP.LINK)}
                    />
                    <SiGmail
                        onClick={() => handleNavigation(SOCIAL.EMAIL.LINK)}
                    />
                </ButtonsContainer>
                <div>
                    <EmailText
                        onClick={() => handleNavigation(SOCIAL.EMAIL.LINK)}
                    >
                        {SOCIAL.EMAIL.VALUE}
                    </EmailText>
                    <Typography>{SOCIAL.CELLPHONE.FORMATTED}</Typography>
                </div>
            </LeftContainer>
        );
    }

    function renderRightSide() {
        const { EMAIL, MESSAGE, NAME, SUBJECT } = STRINGS.CONTACT.PLACEHOLDERS;

        return (
            <div>
                <div>
                    <Typography
                        variant="h4"
                        sx={{ marginBottom: 5, fontWeight: 500 }}
                    >
                        {STRINGS.CONTACT.FORM_TITLE}
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <div style={{ marginBottom: 25 }}>
                            <BaseInput
                                id="name"
                                name="name"
                                placeholder={NAME}
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                errorMessage={formik.errors.name}
                                onBlur={formik.handleBlur}
                                hasError={formik.touched.name}
                            />
                        </div>
                        <div style={{ marginBottom: 25 }}>
                            <BaseInput
                                id="email"
                                name="email"
                                placeholder={EMAIL}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                errorMessage={formik.errors.email}
                                onBlur={formik.handleBlur}
                                hasError={formik.touched.email}
                            />
                        </div>
                        <div style={{ marginBottom: 25 }}>
                            <BaseInput
                                id="subject"
                                name="subject"
                                placeholder={SUBJECT}
                                onChange={formik.handleChange}
                                value={formik.values.subject}
                                errorMessage={formik.errors.subject}
                                onBlur={formik.handleBlur}
                                hasError={formik.touched.subject}
                            />
                        </div>
                        <div style={{ marginBottom: 25 }}>
                            <BaseTextarea
                                rows={10}
                                id="message"
                                name="message"
                                placeholder={MESSAGE}
                                onChange={formik.handleChange}
                                value={formik.values.message}
                                errorMessage={formik.errors.message}
                                onBlur={formik.handleBlur}
                                hasError={formik.touched.message}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                gap: 20,
                                alignItems: "center",
                            }}
                        >
                            <Button
                                style={{ borderRadius: 25 }}
                                variant="contained"
                                type="submit"
                            >
                                {STRINGS.CONTACT.SUBMIT_BUTTON}
                            </Button>
                            {renderIcon()}
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    function renderIcon() {
        if (showSuccess) {
            return (
                <div>
                    <div
                        style={{
                            color: "green",
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <FaCheck color="green" />
                        <Typography>Message send successfully</Typography>
                    </div>
                </div>
            );
        }

        if (hasError) {
            return (
                <div>
                    <div
                        style={{
                            color: "red",
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <FaX color="red" />
                        <Typography>Error to send message</Typography>
                    </div>
                </div>
            );
        }

        if (isLoading) {
            return <CircularProgress />;
        }
    }

    function renderContent() {
        return (
            <Grid container>
                <Grid item xs={12} md={6}>
                    {renderLeftSide()}
                </Grid>
                <Grid item xs={12} md={6}>
                    {renderRightSide()}
                </Grid>
            </Grid>
        );
    }

    return (
        <div style={styles.container} id={SECTIONS.CONTACT}>
            {renderTitle()}
            {renderContent()}
        </div>
    );
}
