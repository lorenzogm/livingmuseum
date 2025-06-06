import Text from '../../elements/Text';

export default function ColaboraHero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <Text
          variant="hero"
          as="h1"
          className="mb-6 tracking-wider text-yellow-500 uppercase"
        >
          Colabora
        </Text>
        <Text
          variant="heading"
          className="max-w-3xl mx-auto text-gray-900"
        >
          Únete a nosotros en nuestra misión de transformar vidas a través del arte. Descubre las diferentes formas en las que puedes colaborar con Living Museum Madrid.
        </Text>
      </div>
    </section>
  );
}
