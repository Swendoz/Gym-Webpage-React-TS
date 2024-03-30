import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            magni repellendus incidunt officia exercitationem atque, autem quas
            in nisi inventore nulla culpa similique laudantium nostrum.
          </p>
          <p>&copy; Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Masa orci senectecus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p className="my-5">Ullamcopper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestat.</p>
          <p className="my-5">06 3914 2008</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
